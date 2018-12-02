import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcardComponent } from './medcard.component';

describe('MedcardComponent', () => {
  let component: MedcardComponent;
  let fixture: ComponentFixture<MedcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
