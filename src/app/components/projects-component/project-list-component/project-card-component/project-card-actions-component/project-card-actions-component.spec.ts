import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardActionsComponent } from './project-card-actions-component';

describe('ProjectCardActionsComponent', () => {
  let component: ProjectCardActionsComponent;
  let fixture: ComponentFixture<ProjectCardActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCardActionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCardActionsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
