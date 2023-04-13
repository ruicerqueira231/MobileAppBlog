import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PercursoMainPage } from './percurso-main.page';

describe('PercursoMainPage', () => {
  let component: PercursoMainPage;
  let fixture: ComponentFixture<PercursoMainPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PercursoMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
