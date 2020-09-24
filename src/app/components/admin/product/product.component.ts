import { Product } from './../../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { CrudProdService } from '../../../services/CRUDprod/crud-prod.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productList: Product[];
  selectedProduct: Product = new Product();

  constructor(public crudProdService:CrudProdService) { }

  ngOnInit(): void {
    this.crudProdService.getProducts()
    .subscribe(data => {
      this.productList = data;
      console.log("productList ProductComponent:", this.productList);
      
    });
    this.resetForm();
  }

  // onSubmit(persona:Product) {
  //   this.crudProdService.insertProduct(persona);
  //   // .subscribe(data => {
  //   //     this.crudProdService.productList = data;
  //   // });
  //   // this.resetForm(productForm);
  // }

  Guardar(persona:Product) {
    return this.crudProdService.insertProduct(persona)
    .subscribe(data => {
      console.log("data:", data);      
      console.log("persona:", persona);      
      // this.crudProdService.productList = data;
      // console.log("productList:", this.crudProdService.productList);      
      alert("Se agrego con exito ...!!!");
    })
  }

  resetForm(productForm?: NgForm) { // ? hace que sea opcional el productform
    if(productForm != null) {
      productForm.reset();
      this.crudProdService.selectedProduct = new Product();
    }
  }

}
