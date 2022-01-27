import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/modules/core/classes/product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;
  @Output() venta = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  compraHijo(e: any){

    this.venta.emit(e.target.id)
   
  }

}
