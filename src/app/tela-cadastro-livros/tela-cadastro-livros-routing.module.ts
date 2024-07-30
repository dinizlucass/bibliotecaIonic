import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaCadastroLivrosPage } from './tela-cadastro-livros.page';

const routes: Routes = [
  {
    path: '',
    component: TelaCadastroLivrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaCadastroLivrosPageRoutingModule {}
