import { CrudProdService } from './../../../services/CRUDprod/crud-prod.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  product: any;
  // @Output() editar = new EventEmitter<object>();

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
    this.onEdit();
  }

  onDelete(product: Product){
    if(confirm('Seguro que quieres eliminarlo?')) {
      this.productService.deleteProduct(product)
      .subscribe(data => {
        this.productList = this.productList.filter( p => p !== product);
        alert("Producto eliminado ...");
      })
    }
  }

  // Edit(product: Product) {
  //   console.log(product);
  //   this.productService.updateProduct(product)
  //   .subscribe(data => {
  //     console.log("data:", data);
  //   })
  // }

  onEdit (product?: Product) {
    // this.editar.emit(product);
    console.log(product);
    sessionStorage.setItem("productName", product.name);
    sessionStorage.setItem("productId", product._id);
    sessionStorage.setItem("productPrice", product.price.toString());
    sessionStorage.setItem("productImage", product.image);
    sessionStorage.setItem("productType", product.type);
    this.productService.selectedProduct = product; // edit realtime but not save DB
    // this.productService.selectedProduct = Object.assign({});
  }

  getProdId(prodId) {
    this.productService.getProductId(prodId);
    console.log("prodId del productListComponent:", prodId);
  }


  // Actualizar(persona:User) {
  //   this.service.updatePersona(persona)
  //   .subscribe(data => {
  //     this.selectedUsers = data;
  //     alert("Se actualizo con Exito ... !!!");
  //     this.router.navigate(['/users']);
  //   })
  // }
}
