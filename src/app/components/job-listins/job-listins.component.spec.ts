import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListinsComponent } from './job-listins.component';

describe('JobListinsComponent', () => {
  let component: JobListinsComponent;
  let fixture: ComponentFixture<JobListinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobListinsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobListinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
