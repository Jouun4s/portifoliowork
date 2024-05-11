import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePublicidadeComponent } from './page-publicidade.component';

describe('PagePublicidadeComponent', () => {
  let component: PagePublicidadeComponent;
  let fixture: ComponentFixture<PagePublicidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePublicidadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagePublicidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
