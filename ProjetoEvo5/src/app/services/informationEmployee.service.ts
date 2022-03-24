import { InformantionEmployee } from './../model/InformationEmployee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InformantionEmployeeService {
  informationApiUrl = 'https://localhost:7129/api/Employees;'
  constructor(private https: HttpClient) { }

  getInformations(): Observable<InformantionEmployee[]> {
    return this.https.get<InformantionEmployee[]>(this.informationApiUrl);
  }

}

