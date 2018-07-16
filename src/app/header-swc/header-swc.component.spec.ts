import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSwcComponent } from './header-swc.component';

describe('HeaderSwcComponent', () => {
  let component: HeaderSwcComponent;
  let fixture: ComponentFixture<HeaderSwcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSwcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSwcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
