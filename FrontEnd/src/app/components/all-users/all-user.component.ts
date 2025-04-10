import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../../services/user-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit{
  userslist: any;


  constructor(private UserServicesService:UserServicesService){

  }

  ngOnInit(): void {
      this.allusers();
  }
  allusers(){
    this.UserServicesService.allusers().subscribe((response) =>{
      this.userslist=response;
      console.log(this.userslist);
    })
  }

  deleteuser(username:any){

  this.UserServicesService.deleteuser(username).subscribe((response) =>{
           alert(response);
         this.allusers();
  })
  }

}
