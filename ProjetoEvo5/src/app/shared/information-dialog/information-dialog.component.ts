import { InformantionEmployee } from 'src/app/model/InformationEmployee';
import {Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-information-dialog',
  templateUrl: './information-dialog.component.html',
  styleUrls: ['./information-dialog.component.scss']
})
export class InformationDialogComponent implements OnInit {
informantion!: InformantionEmployee;
isChange!:boolean;

constructor(
  @Inject(MAT_DIALOG_DATA)
  public data: InformantionEmployee,
  public dialogRef: MatDialogRef<InformationDialogComponent>,
  ) {}

  ngOnInit(): void {
    if (this.data.Id != null) {
      this.isChange = true;
    } else {
      this.isChange = false;
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
