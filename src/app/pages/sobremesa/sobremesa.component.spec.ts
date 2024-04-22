import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremesaComponent } from './sobremesa.component';

describe('SobremesaComponent', () => {
  let component: SobremesaComponent;
  let fixture: ComponentFixture<SobremesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobremesaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SobremesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
