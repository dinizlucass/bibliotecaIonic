import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaCadastroLivrosPage } from './tela-cadastro-livros.page';

describe('TelaCadastroLivrosPage', () => {
  let component: TelaCadastroLivrosPage;
  let fixture: ComponentFixture<TelaCadastroLivrosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCadastroLivrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
