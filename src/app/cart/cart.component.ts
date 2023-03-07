import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent {
  constructor(private apiService: ApiService){}
  // CartList : any =[]

  // ngOnInit(): void{
  //   this.apiService.getCart('CartList').subscribe((dataList : any)=>{
  //     this.CartList = dataList;
  //     console.log(this.CartList)
  //   },(err: any)=>{
  //     console.log(err)
  //   })
  // }
}
