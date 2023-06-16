import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplayJobComponent } from './applay-job.component';

describe('ApplayJobComponent', () => {
  let component: ApplayJobComponent;
  let fixture: ComponentFixture<ApplayJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplayJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplayJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
