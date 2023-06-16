import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLandpageComponent } from './home-landpage.component';

describe('HomeLandpageComponent', () => {
  let component: HomeLandpageComponent;
  let fixture: ComponentFixture<HomeLandpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLandpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLandpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
