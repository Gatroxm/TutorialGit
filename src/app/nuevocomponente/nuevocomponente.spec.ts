import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nuevocomponente } from './nuevocomponente';

describe('Nuevocomponente', () => {
  let component: Nuevocomponente;
  let fixture: ComponentFixture<Nuevocomponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nuevocomponente],
    }).compileComponents();

    fixture = TestBed.createComponent(Nuevocomponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
