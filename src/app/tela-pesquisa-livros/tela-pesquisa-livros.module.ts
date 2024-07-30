import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaPesquisaLivrosPageRoutingModule } from './tela-pesquisa-livros-routing.module';

import { TelaPesquisaLivrosPage } from './tela-pesquisa-livros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaPesquisaLivrosPageRoutingModule
  ],
  declarations: [TelaPesquisaLivrosPage]
})
export class TelaPesquisaLivrosPageModule {}
