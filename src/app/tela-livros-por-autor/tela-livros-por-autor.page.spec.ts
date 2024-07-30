import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaLivrosPorAutorPage } from './tela-livros-por-autor.page';

describe('TelaLivrosPorAutorPage', () => {
  let component: TelaLivrosPorAutorPage;
  let fixture: ComponentFixture<TelaLivrosPorAutorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaLivrosPorAutorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
