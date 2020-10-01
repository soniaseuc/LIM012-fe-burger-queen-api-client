import { Component, OnInit } from '@angular/core';
import { CounterProductsService } from './../../services/counter-products/counter-products.service';
import { ProductsService } from './../../services/products/products.service';
import { Order } from '../../interfaces/order';

import { UsersService } from 'src/app/services/users/users.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  navbarPadre = 'mensaje desde el padre';
  foodordersPadre = 'mensaje desde el padre';
  public showOrders: any;
  public orders: Order[];
  // public product: any;

  constructor(
    private counterProductService: CounterProductsService,
    private productsService: ProductsService,
    private userService:UsersService, 
  ) { }

  ngOnInit(): void {
    this.productsService.kitchenOrders().subscribe(
      (data: Order[]) => {
      this.orders = data;
      console.log(this.orders);
    
    });
  }
  Delete(orders: Order){
    this.productsService.deleteOrder(orders)
    .subscribe(data => {
      this.orders = this.orders.filter( p => p !== orders);
      console.log(orders);
      console.log(orders._id);
      alert("Orden eliminada ...");
    })
  }
 
}
