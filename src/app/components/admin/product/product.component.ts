import { Product } from './../../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { CrudProdService } from '../../../services/CRUDprod/crud-prod.service';
import { FormGroup, NgForm } from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  productList: Product[];
  selectedProduct: Product = new Product();
  productForm: FormGroup;

  constructor(public crudProdService:CrudProdService) { }

  ngOnInit(): void {
    this.crudProdService.getProducts()
    .subscribe(data => {
      this.productList = data;
      console.log("productList ProductComponent:", this.productList);
    });
    this.resetForm();
  }

  ngOnChange(): void {
  }

  onSubmit(productForm: NgForm) {
    if (productForm.value._id == null) {
      this.crudProdService.insertProduct(productForm.value);
    } else {
      this.crudProdService.updateProduct(productForm.value);
    }
    this.resetForm(productForm.value);
  }

  Guardar(product:Product) {
    this.crudProdService.insertProduct(product)
    .subscribe(data => {
      console.log("data:", data);      
      console.log("product:", product);      
      // this.crudProdService.productList = data;
      // console.log("productList:", this.crudProdService.productList);      
      alert("Se agrego con exito ...!!!");
    })
  }

  resetFor(productForm?: NgForm) { // ? hace que sea opcional el argumento productform
    if(productForm != null) {
      productForm.reset();
      this.crudProdService.selectedProduct = new Product(); // limpia los inputs
    }
  }

    resetForm(product?: Product) { // ? hace que sea opcional el productform
    if(product != null) {      
      this.crudProdService.selectedProduct = new Product();
    }
  }

  editProduct (product?: Product) {
    console.log( "editproduct de product component",product);      
      // this.crudProdService.selectedProduct.name = sessionStorage.getItem('productName');
      // this.crudProdService.selectedProduct.type = sessionStorage.getItem('productType');
      // this.crudProdService.selectedProduct.price = parseInt(sessionStorage.getItem('productPrice'));
      // this.crudProdService.selectedProduct.image = sessionStorage.getItem('productImage');
      if (product != null) {
        this.crudProdService.updateProduct(product)
        .subscribe(data => {
          console.log(data);          
          alert("Se modifico con exito ...!!!");
        })

        this.resetForm();
      }
  }

}
