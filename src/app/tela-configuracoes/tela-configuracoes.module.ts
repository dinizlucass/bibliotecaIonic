import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaConfiguracoesPageRoutingModule } from './tela-configuracoes-routing.module';

import { TelaConfiguracoesPage } from './tela-configuracoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaConfiguracoesPageRoutingModule
  ],
  declarations: [TelaConfiguracoesPage]
})
export class TelaConfiguracoesPageModule {}
