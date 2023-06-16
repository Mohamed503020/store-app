import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreLandpageComponent } from './store-landpage.component';

describe('StoreLandpageComponent', () => {
  let component: StoreLandpageComponent;
  let fixture: ComponentFixture<StoreLandpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreLandpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreLandpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
