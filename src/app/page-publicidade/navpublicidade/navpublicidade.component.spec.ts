import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavpublicidadeComponent } from './navpublicidade.component';

describe('NavpublicidadeComponent', () => {
  let component: NavpublicidadeComponent;
  let fixture: ComponentFixture<NavpublicidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavpublicidadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavpublicidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
