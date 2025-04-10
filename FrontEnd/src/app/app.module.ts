import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AllUserComponent } from './components/all-users/all-user.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { AllSubjectComponent } from './components/all-subjects/all-subject.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AllStudentComponent } from './components/all-students/all-student.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { ViewSubjectComponent } from './components/view-subject/view-subject.component';
import { TakeAttendanceComponent } from './components/take-attendance/take-attendance.component';
import { AllAttendanceRecordsComponent } from './components/all-attendance-records/all-attendance-records.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    AllUserComponent,
    FooterComponent,
    LoginComponent,
    MenuComponent,
    UserProfileComponent,
    AddSubjectComponent,
    AllSubjectComponent,
    AddStudentComponent,
    AllStudentComponent,
    StudentProfileComponent,
    ViewSubjectComponent,
    TakeAttendanceComponent,
    AllAttendanceRecordsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
