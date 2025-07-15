import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Doacoes } from './doacoes';

describe('Doacoes', () => {
  let component: Doacoes;
  let fixture: ComponentFixture<Doacoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Doacoes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Doacoes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
