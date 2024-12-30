import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { JOBS } from '../../jobs-mock';
import { Observable, of } from 'rxjs';
import { Job } from '../../Job';
@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'http://localhost:4200/';


  constructor(private http:HttpClient) { }

  getJob(): Observable<Job[]>{
    return this.http.get<Job[]>(this.apiUrl)
  }


}
