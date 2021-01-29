import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamilyMakePage } from './family-make.page';

const routes: Routes = [
  {
    path: '',
    component: FamilyMakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamilyMakePageRoutingModule {}
