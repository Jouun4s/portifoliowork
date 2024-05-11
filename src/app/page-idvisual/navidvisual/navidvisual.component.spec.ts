import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavidvisualComponent } from './navidvisual.component';

describe('NavidvisualComponent', () => {
  let component: NavidvisualComponent;
  let fixture: ComponentFixture<NavidvisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavidvisualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavidvisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
