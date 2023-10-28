import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightRatingComponent } from './right-rating.component';

describe('RightRatingComponent', () => {
  let component: RightRatingComponent;
  let fixture: ComponentFixture<RightRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightRatingComponent]
    });
    fixture = TestBed.createComponent(RightRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
