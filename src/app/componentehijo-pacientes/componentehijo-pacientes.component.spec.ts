import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentehijoPacientesComponent } from './componentehijo-pacientes.component';

describe('ComponentehijoPacientesComponent', () => {
  let component: ComponentehijoPacientesComponent;
  let fixture: ComponentFixture<ComponentehijoPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentehijoPacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentehijoPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
