import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaControleEmprestimosPage } from './tela-controle-emprestimos.page';

const routes: Routes = [
  {
    path: '',
    component: TelaControleEmprestimosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaControleEmprestimosPageRoutingModule {}
