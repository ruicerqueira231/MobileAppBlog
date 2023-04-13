import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TerraMainPage } from './terra-main.page';

describe('TerraMainPage', () => {
  let component: TerraMainPage;
  let fixture: ComponentFixture<TerraMainPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TerraMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
