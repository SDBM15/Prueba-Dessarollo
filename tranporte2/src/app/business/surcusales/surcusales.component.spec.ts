import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurcusalesComponent } from './surcusales.component';

describe('SurcusalesComponent', () => {
  let component: SurcusalesComponent;
  let fixture: ComponentFixture<SurcusalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurcusalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurcusalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
