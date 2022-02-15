import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Interface/IProduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[ProductsService]
})

export class ProductsComponent {

  products:IProduct[]=[];
  imageWidth:number=100;
  imageMargin:number=10;

  constructor(private prodService:ProductsService) { 
      this.prodService.getProductData().subscribe(data=> {this.products=data;});
    }
  }


