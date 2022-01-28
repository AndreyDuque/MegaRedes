import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'updateProduct',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  nombre = "";
  descripcion = "";
  precio = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  updateProduct(form: NgForm){

    console.log(form.value);

  }

}
