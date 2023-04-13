import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Percurso1Page } from './percurso1.page';

describe('Percurso1Page', () => {
  let component: Percurso1Page;
  let fixture: ComponentFixture<Percurso1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Percurso1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
