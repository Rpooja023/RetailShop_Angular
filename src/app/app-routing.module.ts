import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
   {
    path : "",
    component : HomeComponent,
    children : [
      {
        path : "products",
        component : ProductsComponent

      },
      {
        path : "orders",
        component : OrdersComponent
      },
      {
        path : "cart",
        component : CartComponent
      }
      
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [HomeComponent,ProductsComponent,OrdersComponent,CartComponent]
