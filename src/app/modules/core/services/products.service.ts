import { Injectable } from '@angular/core';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(){

    let products: Product[] = [];
    let i = 1;

    do {
      let product: Product = new Product(i, "product standar " + i, "Esta es la descripción de este producto", Math.random()*i*10000);
      products.push(product);
      i++;
    } while (i  < 100);

    return products;

  }

  findOne(id: number){

    const products = this.getProducts();
    
    return products.filter(product=>product.id === id)

  }

}
