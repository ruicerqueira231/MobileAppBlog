import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Percurso3Page } from './percurso3.page';

describe('Percurso3Page', () => {
  let component: Percurso3Page;
  let fixture: ComponentFixture<Percurso3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Percurso3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
