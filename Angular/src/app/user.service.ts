import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:8082/user/transaction";

  // private baseURL ="http://localhost:8082/login";

  private base ="http://localhost:8082/getAllUsers";

  private depositeAmt = "http://localhost:8082/user/deposit";

  
  constructor(private httpClient : HttpClient ) { }

  // loginUser(user:User):Observable<any>{
  //   return this.httpClient.post(`${this.baseURL}`,user);
  // }

  getAllTransaction():Observable<any> {
    return this.httpClient.get(this.url)
  }

  depositUser(amt: User){
    return this.httpClient.post(this.depositeAmt,amt);
  }

  getAllRegisters(){
    return this.httpClient.get(this.base);
  }

  createRegister(reg: User): Observable<Object>{
    const url="http://localhost:8082/signup";
    return this.httpClient.post<Object>(url,reg);
  }
}
