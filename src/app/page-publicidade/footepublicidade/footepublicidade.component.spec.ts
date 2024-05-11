import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootepublicidadeComponent } from './footepublicidade.component';

describe('FootepublicidadeComponent', () => {
  let component: FootepublicidadeComponent;
  let fixture: ComponentFixture<FootepublicidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootepublicidadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FootepublicidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
