import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarOngs } from './cadastrar-ongs';

describe('CadastrarOngs', () => {
  let component: CadastrarOngs;
  let fixture: ComponentFixture<CadastrarOngs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarOngs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarOngs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
