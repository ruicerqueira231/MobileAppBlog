import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Terra2Page } from './terra2.page';

describe('Terra2Page', () => {
  let component: Terra2Page;
  let fixture: ComponentFixture<Terra2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Terra2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
