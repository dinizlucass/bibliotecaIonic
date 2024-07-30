import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaCadastroLivrosPageRoutingModule } from './tela-cadastro-livros-routing.module';

import { TelaCadastroLivrosPage } from './tela-cadastro-livros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaCadastroLivrosPageRoutingModule
  ],
  declarations: [TelaCadastroLivrosPage]
})
export class TelaCadastroLivrosPageModule {}
