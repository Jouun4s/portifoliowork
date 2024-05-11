import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIdvisualComponent } from './page-idvisual.component';

describe('PageIdvisualComponent', () => {
  let component: PageIdvisualComponent;
  let fixture: ComponentFixture<PageIdvisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageIdvisualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageIdvisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
