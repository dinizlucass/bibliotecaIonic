import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar as páginas
import { TelaInicialPage } from './tela-inicial/tela-inicial.page';
import { TelaCadastroLivrosPage } from './tela-cadastro-livros/tela-cadastro-livros.page';
import { TelaPesquisaLivrosPage } from './tela-pesquisa-livros/tela-pesquisa-livros.page';
import { TelaDetalhesLivroPage } from './tela-detalhes-livro/tela-detalhes-livro.page';
import { TelaControleEmprestimosPage } from './tela-controle-emprestimos/tela-controle-emprestimos.page';
import { TelaLivrosPorAutorPage } from './tela-livros-por-autor/tela-livros-por-autor.page';
import { TelaConfiguracoesPage } from './tela-configuracoes/tela-configuracoes.page';

const routes: Routes = [
  { path: '', redirectTo: 'tela-inicial', pathMatch: 'full' },
  { path: 'tela-inicial', component: TelaInicialPage },
  { path: 'tela-cadastro-livros', component: TelaCadastroLivrosPage },
  { path: 'tela-pesquisa-livros', component: TelaPesquisaLivrosPage },
  { path: 'tela-detalhes-livro/:id', component: TelaDetalhesLivroPage },
  { path: 'tela-controle-emprestimos', component: TelaControleEmprestimosPage },
  { path: 'tela-livros-por-autor', component: TelaLivrosPorAutorPage },
  { path: 'tela-configuracoes', component: TelaConfiguracoesPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
