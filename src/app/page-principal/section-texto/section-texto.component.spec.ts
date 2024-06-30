import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTextoComponent } from './section-texto.component';

describe('SectionTextoComponent', () => {
  let component: SectionTextoComponent;
  let fixture: ComponentFixture<SectionTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTextoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
