import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoComponent } from './layo.component';

describe('LayoComponent', () => {
  let component: LayoComponent;
  let fixture: ComponentFixture<LayoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
