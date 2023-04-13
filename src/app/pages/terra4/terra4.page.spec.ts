import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Terra4Page } from './terra4.page';

describe('Terra4Page', () => {
  let component: Terra4Page;
  let fixture: ComponentFixture<Terra4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Terra4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
