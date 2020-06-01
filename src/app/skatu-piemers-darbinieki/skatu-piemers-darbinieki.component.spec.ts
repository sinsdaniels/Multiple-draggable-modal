import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkatuPiemersDarbiniekiComponent } from './skatu-piemers-darbinieki.component';

describe('SkatuPiemersDarbiniekiComponent', () => {
  let component: SkatuPiemersDarbiniekiComponent;
  let fixture: ComponentFixture<SkatuPiemersDarbiniekiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkatuPiemersDarbiniekiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkatuPiemersDarbiniekiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
