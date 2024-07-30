import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaConfiguracoesPage } from './tela-configuracoes.page';

const routes: Routes = [
  {
    path: '',
    component: TelaConfiguracoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaConfiguracoesPageRoutingModule {}
