import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanithComponent } from './janith.component';

describe('JanithComponent', () => {
  let component: JanithComponent;
  let fixture: ComponentFixture<JanithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
