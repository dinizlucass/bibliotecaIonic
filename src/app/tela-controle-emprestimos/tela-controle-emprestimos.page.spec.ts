import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaControleEmprestimosPage } from './tela-controle-emprestimos.page';

describe('TelaControleEmprestimosPage', () => {
  let component: TelaControleEmprestimosPage;
  let fixture: ComponentFixture<TelaControleEmprestimosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaControleEmprestimosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
