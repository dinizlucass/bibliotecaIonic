import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaPesquisaLivrosPage } from './tela-pesquisa-livros.page';

const routes: Routes = [
  {
    path: '',
    component: TelaPesquisaLivrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaPesquisaLivrosPageRoutingModule {}
