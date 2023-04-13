import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Terra1Page } from './terra1.page';

describe('Terra1Page', () => {
  let component: Terra1Page;
  let fixture: ComponentFixture<Terra1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Terra1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
