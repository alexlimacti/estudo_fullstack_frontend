import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as AppUtils from '../shared/comum/app.utils';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = `${AppUtils.BASE_URL}api/users`;
  }

  usersReport() {
    return this.http.get(`${this.usersUrl}/reports`,
    { responseType: 'blob' })
      .toPromise()
      .then(response => response);
  }
}
