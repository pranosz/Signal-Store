import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2Component } from './page-2.component';

describe('Page2Component', () => {
  let component: Page2Component;
  let fixture: ComponentFixture<Page2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Page2Component]
    });
    fixture = TestBed.createComponent(Page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
