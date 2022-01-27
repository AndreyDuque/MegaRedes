import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/core/classes/product';

@Component({
  selector: 'app-eshop',
  templateUrl: './eshop.component.html',
  styleUrls: ['./eshop.component.scss']
})
export class EshopComponent implements OnInit {

  products: Product[] = [];
  constructor() { }

  ngOnInit(): void {
    let i = 1;
    
    let product: Product = new Product("Cuchara", "Este es el cubierto principal", Math.random()*i*10000);
    this.products.push(product);
    product = new Product("Tenedor", "Cubierto secundario", Math.random()*i*10000);
    this.products.push(product);
    product = new Product("Cuchillo", "Cubierto no encontrado", Math.random()*i*10000);
    this.products.push(product);
    // do {
    //   let product: Product = new Product("product " + i, "Esta es la descripción de este producto", Math.random()*i*10000);
    //   this.products.push(product);
    //   i++;
    // } while (i  < 100);
  }

  compraPadre(e: string){
    console.log('e', e);
  }

}
