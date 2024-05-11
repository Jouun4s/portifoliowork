import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloPublicidadeComponent } from './titulo-publicidade.component';

describe('TituloPublicidadeComponent', () => {
  let component: TituloPublicidadeComponent;
  let fixture: ComponentFixture<TituloPublicidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituloPublicidadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TituloPublicidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
