import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyChipComponent } from './technology-chip-component';

describe('TechnologyChipComponent', () => {
  let component: TechnologyChipComponent;
  let fixture: ComponentFixture<TechnologyChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyChipComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TechnologyChipComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
