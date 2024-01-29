import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculunComponent } from './curriculun.component';

describe('CurriculunComponent', () => {
  let component: CurriculunComponent;
  let fixture: ComponentFixture<CurriculunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
