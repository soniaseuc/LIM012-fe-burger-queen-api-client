import { CounterProductsService } from './../../services/counter-products/counter-products.service';
import { ProductsService } from './../../services/products/products.service';
import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../interfaces/item';
import { Router } from '@angular/router';
import { AuthConfigService } from 'src/app/services/auth-config.service';

@Component({
  selector: 'app-bill-orders',
  templateUrl: './bill-orders.component.html',
  styleUrls: ['./bill-orders.component.scss']
})
export class BillOrdersComponent implements OnInit {
  // etiqueta Input en el componente hijo
  @Input() hijoBillOrders: any;
  counter: any;
  client: string;
  public items: Array<Item>;
  public totalPrice: number;
  public order: any;
  public productId: string;
  public qty: number;
  // public status: string = 'pending';
  // public dateEntry: number = Date.now();
  // public totalQuantity: number;
  public subscription: any;
  // total y products son para vaciar el resumen del pedido cuando envie pedido a cocina
  public productInCar = [];
  // total: number;

  constructor(
    private counterProductService: CounterProductsService,
    private productsService: ProductsService,
    private router: Router,
    public authConfigService: AuthConfigService
    ) {
    // this.counterProductService.currentDataCart.subscribe(item => this.counter = item);

    // this.counterProductService.currentNumber.subscribe(numb => {
    //   this.counter = numb;
    // });
  }

  ngOnInit(): void {
    this.totalBill();
    this.resetBill();
    // this.subscription =

        // this.totalQuantity = productInCar.length;
    //   }
    // });
  }

  // disminuir(item: any): void {
  //   if (item.quantity === undefined){
  //             item.quantity = 0;
  //      } else if (item.quantity !== undefined && item.quantity > 0){
  //             --item.quantity;
  //      }
  //  }

  // ngOnChange(): void {
  //   this.counterProductService.currentDataCart.subscribe(productInCar => {
  //     if (productInCar) {
  //       this.items = productInCar;

  //       // this.totalQuantity = productInCar.length;
  //       this.totalPrice = productInCar.reduce((sum, current) => sum + (current.price * current.quantity), 0);
  //     }
  //   });
  // }

//   changeQty(product): void {
//   this.counterProductService.changeCart(product);
//   console.log(product);
// }

  public remove(product: Item): void {
    this.counterProductService.removeElementCart(product);
  }

  totalBill(): void {
    this.counterProductService.currentDataCart.subscribe(productInCar => {
      if (productInCar) {
        this.items = productInCar;
        this.totalPrice = productInCar.reduce((sum, current) => sum + (current.price * current.quantity), 0);
      }});
  }

  resetBill(): void {
    this.totalPrice = 0;
    this.productInCar = [];
  }

  sendOrder(items): any {
    const userEmail = sessionStorage.getItem('emailCurrentUser');
    this.authConfigService.getUser(userEmail).subscribe(
      userInfo => {
        // console.log(userInfo, 'hola mundo');
        this.order = { // orders obj products array
          client: this.client,
          userId: userInfo._id,
          products: items.map(prod => {
            const obj = {
              qty: prod.quantity,
              productId: prod._id,
              // name: prod.name,
              // price: prod.price
            };
            // console.log(obj);
            return obj;
          }
            ),            
          };
        console.log(this.order);
            // this.resetBill();
            this.productsService.sendOrder(this.order);
            this.counterProductService.cleanCart();
            // this.productsService.sendOrder(items);
            // this.router.navigate(['/orders']);
            // this.subscription.unsubscribe();
      }
    );

      // products: obj.items
      // .map(item => {
      //   this.qty = item.quantity,
      //   this.productId = item._id;
      // }),
      // map para destructurar el obj
      // status: this.status,
      // dateEntry: this.dateEntry
    
    // console.log(this.order);
    // this.resetBill();
    // this.productsService.sendOrder(this.order);
    // // this.productsService.sendOrder(items);
    // this.router.navigate(['/orders']);
    // this.subscription.unsubscribe();


    // setTimeout(() => {
    //   this.subscription.unsubscribe();
    // }, 10000);

  }

  // ngOnDestroy() { this.subscription(`onDestroy`); }
}
