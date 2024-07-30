import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaControleEmprestimosPageRoutingModule } from './tela-controle-emprestimos-routing.module';

import { TelaControleEmprestimosPage } from './tela-controle-emprestimos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaControleEmprestimosPageRoutingModule
  ],
  declarations: [TelaControleEmprestimosPage]
})
export class TelaControleEmprestimosPageModule {}
