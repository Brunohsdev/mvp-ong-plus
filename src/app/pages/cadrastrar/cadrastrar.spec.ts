import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadrastrar } from './cadrastrar';

describe('Cadrastrar', () => {
  let component: Cadrastrar;
  let fixture: ComponentFixture<Cadrastrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cadrastrar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cadrastrar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
