import { Component } from '@angular/core';
import { UserServicesService } from '../../services/user-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  constructor(private UserServicesService:UserServicesService, private router:Router){

  }

firstName: any;
lastName: any;
password: any;
username: any;
email: any;
role: any;
addUser() {
   const newuser={
        firstName:this.firstName,
        lastName: this.lastName,
        password: this.password,
        username: this.username,
        email: this.email,
        role: this.role
  }
  this.UserServicesService.adduser(newuser).subscribe((response) => {
     alert('User Added Successfully');
     this.router.navigate(['/all-users']);
  })
}
}
