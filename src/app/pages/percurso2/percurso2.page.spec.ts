import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Percurso2Page } from './percurso2.page';

describe('Percurso2Page', () => {
  let component: Percurso2Page;
  let fixture: ComponentFixture<Percurso2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Percurso2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
