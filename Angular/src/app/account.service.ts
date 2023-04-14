import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient : HttpClient ) { }

  loginUser(account:Account):Observable<any>{
    const header = new HttpHeaders({Authorization: 'basic'+btoa(account.accno+":"+account.pin)})
    const baseURL ="http://localhost:8082/signin";
    console.log("account IN")
    return this.httpClient.post(baseURL,account);
  }
}