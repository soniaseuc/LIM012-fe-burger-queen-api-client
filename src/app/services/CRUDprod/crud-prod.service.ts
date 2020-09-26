import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CrudProdService {
  public url: string;
  public productList: any;
  selectedProduct: Product = new Product();//inicia service esta variable esta vacia
  idToken = sessionStorage.getItem('token');

  constructor(private http:HttpClient) { 
    this.url = environment.apiUrl;
  }

  getProducts() {
    this.productList = this.http.get<Product[]>(`${this.url}products`, {headers: {Authorization:`Bearer ${this.idToken}`}});
    console.log("productList:", this.productList);
    return this.productList;
    // return this.http.get<Product[]>(`${this.url}products`);
  }

  // insertProduct(product: Product) {
  //   console.log(`create product: ${product.name}`);
  //   const prod = this.productList.push({
  //     name: product.name,
  //     price: product.price,
  //     imagen: product.image,
  //     type: product.type,
  //   });
  //   return this.http.post<Product>(`${this.url}products`, prod);
  // }

  insertProduct(product: Product){
    console.log(`create product - name: ${product.name}`);
    return this.http.post<Product>(`${this.url}products`, product , {headers: {Authorization:`Bearer ${this.idToken}`}});
  }

  getProductId(_id:string){
    console.log(`get product id: ${_id}`);
    return this.http.get<Product>(`${this.url}products/${_id}`);
  }

  updateProduct(product: Product) {
    console.log(`update product id: ${product._id}`);
    let id = product._id;
    delete product._id;
    return this.http.put<Product>(`${this.url}products/${id}`, product);
  }

  deleteProduct(product:Product){
    console.log(`delete product id: ${product._id}`);
    return this.http.delete<Product>(`${this.url}products/${product._id}`, {headers: {Authorization:`Bearer ${this.idToken}`}});
  }

}
