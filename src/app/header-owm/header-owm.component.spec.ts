import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOwmComponent } from './header-owm.component';

describe('HeaderOwmComponent', () => {
  let component: HeaderOwmComponent;
  let fixture: ComponentFixture<HeaderOwmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderOwmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderOwmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
