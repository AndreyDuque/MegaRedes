import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'getProductId',
  templateUrl: './get-product-id.component.html',
  styleUrls: ['./get-product-id.component.scss']
})
export class GetProductIdComponent implements OnInit {

  productId = 0;
  @Output() productFiltered = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  productFilter(form: NgForm){

    console.log(form.value);
    this.productFiltered.emit(form.value.productId);
    form.reset();

  }

}
