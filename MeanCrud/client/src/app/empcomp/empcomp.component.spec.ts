import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpcompComponent } from './empcomp.component';

describe('EmpcompComponent', () => {
  let component: EmpcompComponent;
  let fixture: ComponentFixture<EmpcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
