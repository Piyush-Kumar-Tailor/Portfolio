import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAlertsComponent } from './contact-alerts-component';

describe('ContactAlertsComponent', () => {
  let component: ContactAlertsComponent;
  let fixture: ComponentFixture<ContactAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactAlertsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactAlertsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
