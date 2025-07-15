import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngDashboard } from './ong-dashboard';

describe('OngDashboard', () => {
  let component: OngDashboard;
  let fixture: ComponentFixture<OngDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OngDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OngDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
