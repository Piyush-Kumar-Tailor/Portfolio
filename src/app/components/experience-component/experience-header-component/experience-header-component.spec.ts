import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceHeaderComponent } from './experience-header-component';

describe('ExperienceHeaderComponent', () => {
  let component: ExperienceHeaderComponent;
  let fixture: ComponentFixture<ExperienceHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceHeaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
