import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(loginrequest: any):Observable <any>{
    const url=("http://localhost:8091/user/login-user")
    return this.http.post(url,loginrequest);

  }
}
