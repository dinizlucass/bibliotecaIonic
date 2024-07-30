import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaDetalhesLivroPage } from './tela-detalhes-livro.page';

describe('TelaDetalhesLivroPage', () => {
  let component: TelaDetalhesLivroPage;
  let fixture: ComponentFixture<TelaDetalhesLivroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaDetalhesLivroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
