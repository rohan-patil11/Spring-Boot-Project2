import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AllUserComponent } from './components/all-users/all-user.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AllStudentComponent } from './components/all-students/all-student.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { AllSubjectComponent } from './components/all-subjects/all-subject.component';
import { TakeAttendanceComponent } from './components/take-attendance/take-attendance.component';
import { AllAttendanceRecordsComponent } from './components/all-attendance-records/all-attendance-records.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  {
    path:'', redirectTo:'login' ,pathMatch:'full'
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'add-user', component:AddUserComponent
  },
  {
    path:'all-users' , component:AllUserComponent
  },
  {
    path:'add-student' , component:AddStudentComponent
  },
  {
    path:'all-students', component:AllStudentComponent
  },
  {
    path:'add-subject', component:AddSubjectComponent
  },
  {
    path:'all-subjects', component:AllSubjectComponent
  },
  {
    path:'take-attendance', component:TakeAttendanceComponent
  },
  {
    path:'all-attendance-records', component:AllAttendanceRecordsComponent
  },
  {
    path:'user-profile/:username' , component:UserProfileComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
