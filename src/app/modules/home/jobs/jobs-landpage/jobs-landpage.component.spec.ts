import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsLandpageComponent } from './jobs-landpage.component';

describe('JobsLandpageComponent', () => {
  let component: JobsLandpageComponent;
  let fixture: ComponentFixture<JobsLandpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsLandpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsLandpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
