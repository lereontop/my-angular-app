import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleJobviewComponent } from './single-jobview.component';

describe('SingleJobviewComponent', () => {
  let component: SingleJobviewComponent;
  let fixture: ComponentFixture<SingleJobviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleJobviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleJobviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
