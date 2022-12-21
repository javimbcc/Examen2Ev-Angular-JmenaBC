import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorterosListComponent } from './porteros-list.component';

describe('PorterosListComponent', () => {
  let component: PorterosListComponent;
  let fixture: ComponentFixture<PorterosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorterosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorterosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
