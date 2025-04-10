import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor( private http:HttpClient) { }

  adduser(newuser:any):Observable<any>{
const url='http://localhost:8091/user/register-user'
 return this.http.post(url,newuser);
  }

  allusers():Observable<any>{
    const url='http://localhost:8091/user/get-all-user'
    return this.http.get(url);
  }

  deleteuser(username:any):Observable<any>{
    const url= `http://localhost:8091/user/delete-user-by-username?username=${username}`

    return this.http.delete(url,{responseType:'text'});

  }
  getuserprofile(username: any): Observable<any> {
    const url = `http://localhost:8091/user/get-user-by-username/${username}`;
    return this.http.get(url);
  }

  UpdateUser(userprofile:any):Observable<any>{
    const url = `http://localhost:8091/user/update-user`;
    return this.http.put(url,userprofile);

  }
}
