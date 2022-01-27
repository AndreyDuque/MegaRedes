import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EshopComponent } from './components/eshop/eshop.component';

const routes: Routes = [
  {
    path: "", component: EshopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EshopRoutingModule { }
