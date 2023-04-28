import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStudentApplicationComponent } from './new-student-application.component';

describe('NewStudentApplicationComponent', () => {
  let component: NewStudentApplicationComponent;
  let fixture: ComponentFixture<NewStudentApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewStudentApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStudentApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
