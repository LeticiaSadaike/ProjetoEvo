import { InformantionEmployeeService } from './../../services/informationEmployee.service';
import { InformantionEmployee } from './../../model/InformationEmployee';
import { InformationDialogComponent } from './../../shared/information-dialog/information-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';


const INFORMANTION_DATA: InformantionEmployee [] = [
  {Id: 1, Name: 'Letícia', Photo: 1.0079, Rg: 123456789, IdDepartment: 30},
  {Id: 2, Name: 'Pedro', Photo: 4.0026, Rg: 234567890, IdDepartment: 20},
  {Id: 3, Name: 'João', Photo: 6.941, Rg: 345678901, IdDepartment: 10},
  {Id: 4, Name: 'Gabriela', Photo: 9.0122, Rg: 456789012, IdDepartment: 30},
  {Id: 5, Name: 'Luiza', Photo: 10.811, Rg: 5678901234, IdDepartment: 10},

];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [InformantionEmployeeService]
})
export class HomeComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['id', 'name', 'photo', 'rg', 'iddepartment', 'actions'];
  dataSource!: InformantionEmployee[];

  constructor(
    public dialog: MatDialog,
    public InformantionEmployeeService: InformantionEmployeeService
    ) {
      this.InformantionEmployeeService.getInformations()
      .subscribe((data: InformantionEmployee[]) => {
        console.log("data")
        console.log(data)
        this.dataSource = data;
      });
    }

  ngOnInit(): void {
  }

  openDialog(information: InformantionEmployee | null ): void {
    const dialogRef = this.dialog.open(InformationDialogComponent, {
      width: '250px',
      data: information === null ? {
      id: null,
      name: '',
      photo: null,
      rg: null,
      iddepartment: null
      } : {
      id: information.Id,
      name: information.Name,
      photo: information.Photo,
      rg: information.Rg,
      iddepartment: information.IdDepartment
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined) {
        if (this.dataSource.map(p => p.Id).includes(result.id)) {
          this.dataSource[result.id - 1] = result;
          this.table.renderRows();
        } else {
        this.dataSource.push(result);
        this.table.renderRows();
        }
      }
    });
  }

  editInformation(information: InformantionEmployee): void {
    this.openDialog(information);
  }

  deleteInformation(id: number): void {
    this.dataSource = this.dataSource.filter(p => p.Id !== id);
  }
}
