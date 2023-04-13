import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Terra3Page } from './terra3.page';

describe('Terra3Page', () => {
  let component: Terra3Page;
  let fixture: ComponentFixture<Terra3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Terra3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
