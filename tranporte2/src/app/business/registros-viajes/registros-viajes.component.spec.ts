import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosViajesComponent } from './registros-viajes.component';

describe('RegistrosViajesComponent', () => {
  let component: RegistrosViajesComponent;
  let fixture: ComponentFixture<RegistrosViajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrosViajesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrosViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
