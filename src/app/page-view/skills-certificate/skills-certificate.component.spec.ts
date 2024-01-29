import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCertificateComponent } from './skills-certificate.component';

describe('SkillsCertificateComponent', () => {
  let component: SkillsCertificateComponent;
  let fixture: ComponentFixture<SkillsCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
