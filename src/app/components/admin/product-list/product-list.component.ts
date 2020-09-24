import { CrudProdService } from './../../../services/CRUDprod/crud-prod.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  product: any;

  constructor(private productService: CrudProdService) { }

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe(data => {
      this.productList = data;
      console.log("ProductListComponent", this.productList);
    })
    // .snapshotChanges()
    // .subscribe(item => {
    //   this.productList = [];
    //   item.forEach(element => {
    //     let x = element.payload.toJSON();
    //     x["$_id"] = element._id;
    //     this.productList.push(x as Product);
    //   });
    // });
    
  }

  ngOnChange(): void {
    this.productService.getProducts();
  }

  Delete(product: Product){
    this.productService.deleteProduct(product)
    .subscribe(data => {
      this.productList = this.productList.filter( p => p !== product);
      alert("Producto eliminado ...");
    })
  }

}
