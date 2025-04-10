import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

username: any=''
password:any=''

constructor(private LoginService:LoginService,private router:Router){

}

login() {
const loginrequest={
  username:this.username,
  password:this.password
}
this.LoginService.login(loginrequest).subscribe((response) => {
if (response!=null) {
    this.router.navigate(['/home']);
} else {
  alert('Invalid Credentials');
  this.router.navigate(['/login'])

}
});
}
}
