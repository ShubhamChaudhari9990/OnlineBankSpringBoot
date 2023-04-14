import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseURL ="http://localhost:8082/adminLogin";
  
  constructor(private httpClient : HttpClient ) { }

  loginAdmin(admin:Admin):Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,admin);
  }
}
