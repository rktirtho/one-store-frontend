import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrearchComponent } from './srearch.component';

describe('SrearchComponent', () => {
  let component: SrearchComponent;
  let fixture: ComponentFixture<SrearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
