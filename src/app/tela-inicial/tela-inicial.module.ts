import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  // Importar o IonicModule
import { TelaInicialPage } from './tela-inicial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [TelaInicialPage]
})
export class TelaInicialPageModule {}
