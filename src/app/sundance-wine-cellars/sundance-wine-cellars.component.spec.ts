import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SundanceWineCellarsComponent } from './sundance-wine-cellars.component';

describe('SundanceWineCellarsComponent', () => {
  let component: SundanceWineCellarsComponent;
  let fixture: ComponentFixture<SundanceWineCellarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SundanceWineCellarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SundanceWineCellarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
