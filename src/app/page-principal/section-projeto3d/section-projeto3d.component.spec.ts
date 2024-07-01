import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProjeto3dComponent } from './section-projeto3d.component';

describe('SectionProjeto3dComponent', () => {
  let component: SectionProjeto3dComponent;
  let fixture: ComponentFixture<SectionProjeto3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionProjeto3dComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionProjeto3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
