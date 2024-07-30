import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaConfiguracoesPage } from './tela-configuracoes.page';

describe('TelaConfiguracoesPage', () => {
  let component: TelaConfiguracoesPage;
  let fixture: ComponentFixture<TelaConfiguracoesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaConfiguracoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
