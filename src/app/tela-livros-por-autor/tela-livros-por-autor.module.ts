import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaLivrosPorAutorPageRoutingModule } from './tela-livros-por-autor-routing.module';

import { TelaLivrosPorAutorPage } from './tela-livros-por-autor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaLivrosPorAutorPageRoutingModule
  ],
  declarations: [TelaLivrosPorAutorPage]
})
export class TelaLivrosPorAutorPageModule {}
