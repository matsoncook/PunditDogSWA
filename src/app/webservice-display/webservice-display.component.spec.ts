import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebserviceDisplayComponent } from './webservice-display.component';

describe('WebserviceDisplayComponent', () => {
  let component: WebserviceDisplayComponent;
  let fixture: ComponentFixture<WebserviceDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebserviceDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebserviceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
