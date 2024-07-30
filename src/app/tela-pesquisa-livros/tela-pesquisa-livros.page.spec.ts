import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaPesquisaLivrosPage } from './tela-pesquisa-livros.page';

describe('TelaPesquisaLivrosPage', () => {
  let component: TelaPesquisaLivrosPage;
  let fixture: ComponentFixture<TelaPesquisaLivrosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaPesquisaLivrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
