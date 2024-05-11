import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooteridvisualComponent } from './footeridvisual.component';

describe('FooteridvisualComponent', () => {
  let component: FooteridvisualComponent;
  let fixture: ComponentFixture<FooteridvisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooteridvisualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooteridvisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
