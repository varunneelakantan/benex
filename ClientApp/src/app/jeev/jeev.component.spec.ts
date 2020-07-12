import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeevComponent } from './jeev.component';

describe('JeevComponent', () => {
  let component: JeevComponent;
  let fixture: ComponentFixture<JeevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
