import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent  implements OnInit{
  constructor(private apiService: ApiService){}
    ProductList : any =[]

    ngOnInit(): void{
      this.apiService.getProduct('ProductList').subscribe((dataList : any)=>{
        this.ProductList = dataList;

      },(err: any)=>{
        console.log(err)
      })
    }

    // addToCart(product: any){
    //   this.apiService.pushCart(product)
    //   console.log(product.Name)
    // }


  }
  


