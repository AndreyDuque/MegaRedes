import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/products.service';


@NgModule({
  declarations: [
  ],
  exports: [
    
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ProductsService
  ]
})
export class CoreModule { }
