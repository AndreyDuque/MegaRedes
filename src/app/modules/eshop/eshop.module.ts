import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EshopRoutingModule } from './eshop-routing.module';
import { EshopComponent } from './components/eshop/eshop.component';
import { HomeModule } from '../home/home.module';
import { ProductComponent } from './components/product/product.component';
import { CoreModule } from '../core/core.module';
import { GetProductIdComponent } from './components/get-product-id/get-product-id.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EshopComponent,
    ProductComponent,
    GetProductIdComponent,
    AddProductComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    EshopRoutingModule,
    HomeModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EshopModule { }
