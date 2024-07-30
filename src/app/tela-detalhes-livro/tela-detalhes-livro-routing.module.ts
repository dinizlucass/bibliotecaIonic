import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaDetalhesLivroPage } from './tela-detalhes-livro.page';

const routes: Routes = [
  {
    path: '',
    component: TelaDetalhesLivroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaDetalhesLivroPageRoutingModule {}
