import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamilyMakePageRoutingModule } from './family-make-routing.module';

import { FamilyMakePage } from './family-make.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamilyMakePageRoutingModule
  ],
  declarations: [FamilyMakePage]
})
export class FamilyMakePageModule {}
