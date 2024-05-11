import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeidvisualComponent } from './gradeidvisual.component';

describe('GradeidvisualComponent', () => {
  let component: GradeidvisualComponent;
  let fixture: ComponentFixture<GradeidvisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradeidvisualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradeidvisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
