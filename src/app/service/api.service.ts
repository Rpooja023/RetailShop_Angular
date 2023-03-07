import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProduct(filename: string) {
    return this.http.get('assets/List/ProductList.json');
  }
  // getCart(filename: string) {
  //   return this.http.get('assets/List/CartList.json');
  // }
  // pushCart(product:any){
  //   this.http.post('assets/List/CartList.json', product)
  //   console.log(product.Name)
  // }
}
