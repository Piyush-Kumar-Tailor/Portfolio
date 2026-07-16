import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardPreviewComponent } from './project-card-preview-component';

describe('ProjectCardPreviewComponent', () => {
  let component: ProjectCardPreviewComponent;
  let fixture: ComponentFixture<ProjectCardPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCardPreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCardPreviewComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
