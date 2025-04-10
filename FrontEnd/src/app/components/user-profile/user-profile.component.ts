import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServicesService } from '../../services/user-services.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

 constructor (private route:ActivatedRoute, private userservice:UserServicesService, private router:Router){
 }
 username:any;
 userprofile:any;
 ngOnInit(): void {
  this.username = this.route.snapshot.paramMap.get('username');
  if (this.username) {
    this.getuserprofile(this.username);
  } else {
    console.error("Username parameter is missing in the route!");
  }
}


  getuserprofile(username: any) {
    this.userservice.getuserprofile(username).subscribe((response) => {
      this.userprofile = response;
      console.log("Full API Response:", response);
    });
  }

  UpdateUser() {
  this.userservice.UpdateUser(this.userprofile).subscribe((response) =>{
    alert('Updated Succesfully :'+this.username)
    this.router.navigate(['/all-users']);
  })
}
}
