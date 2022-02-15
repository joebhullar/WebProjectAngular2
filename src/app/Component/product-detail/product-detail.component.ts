import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  title:string='Product Detail Page'
  productName:string;
  image:string;
  price:number;
  desc:string;

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let id:number = this.route.snapshot.params['productId'];
    this.title += ' - ${id} >';

    this.route.queryParams.subscribe((params) => {
      this.productName = params['name'];
      this.image=params['img'];
      this.price=params['price'];
    })
  }
  onBackPress():void{ //This is called a "back-link" this is really just the back button to go back to previous page
    this.router.navigate(['/Products'])
  }

}
