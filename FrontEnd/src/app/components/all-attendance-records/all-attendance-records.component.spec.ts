import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAttendanceRecordsComponent } from './all-attendance-records.component';

describe('AllAttendanceRecordsComponent', () => {
  let component: AllAttendanceRecordsComponent;
  let fixture: ComponentFixture<AllAttendanceRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllAttendanceRecordsComponent]
    });
    fixture = TestBed.createComponent(AllAttendanceRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
