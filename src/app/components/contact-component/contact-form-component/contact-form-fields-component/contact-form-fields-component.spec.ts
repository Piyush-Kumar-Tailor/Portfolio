import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormFieldsComponent } from './contact-form-fields-component';

describe('ContactFormFieldsComponent', () => {
  let component: ContactFormFieldsComponent;
  let fixture: ComponentFixture<ContactFormFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormFieldsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactFormFieldsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
