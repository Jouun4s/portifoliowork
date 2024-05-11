import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloidvisualComponent } from './tituloidvisual.component';

describe('TituloidvisualComponent', () => {
  let component: TituloidvisualComponent;
  let fixture: ComponentFixture<TituloidvisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituloidvisualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TituloidvisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
