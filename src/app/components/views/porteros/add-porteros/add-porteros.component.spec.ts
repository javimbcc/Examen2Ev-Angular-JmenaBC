import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPorterosComponent } from './add-porteros.component';

describe('AddPorterosComponent', () => {
  let component: AddPorterosComponent;
  let fixture: ComponentFixture<AddPorterosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPorterosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPorterosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
