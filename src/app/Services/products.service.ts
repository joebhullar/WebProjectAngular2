import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Interface/IProduct';

@Injectable()
export class ProductsService {

  constructor(private http:HttpClient) { }
  productUrl="./assets/Product.json";

  getProductData():Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this.productUrl)
  }

  getProductDetailById(id:number){
    return this.http.get<IProduct>(this.productUrl +"/"+id);
  }


  
}

