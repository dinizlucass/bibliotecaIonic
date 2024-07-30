import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaDetalhesLivroPageRoutingModule } from './tela-detalhes-livro-routing.module';

import { TelaDetalhesLivroPage } from './tela-detalhes-livro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaDetalhesLivroPageRoutingModule
  ],
  declarations: [TelaDetalhesLivroPage]
})
export class TelaDetalhesLivroPageModule {}
