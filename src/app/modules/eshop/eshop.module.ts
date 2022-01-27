import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EshopRoutingModule } from './eshop-routing.module';
import { EshopComponent } from './components/eshop/eshop.component';
import { HomeModule } from '../home/home.module';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [
    EshopComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    EshopRoutingModule,
    HomeModule
  ]
})
export class EshopModule { }
