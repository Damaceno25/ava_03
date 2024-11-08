import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CepConsultaPageRoutingModule } from './cep-consulta-routing.module';

import { CepConsultaPage } from './cep-consulta.page';

@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CepConsultaPageRoutingModule
  ],
  declarations: [CepConsultaPage]
})
export class CepConsultaPageModule {}
