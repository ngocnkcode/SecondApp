import { Component, OnInit } from '@angular/core';
import { ProductService } from './Services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  products: any[] = []

  constructor(private productService: ProductService){

  }

  ngOnInit(): void {
    this.productService.getAll().subscribe((res)=>{
      this.products = res;
      console.log(this.products)
    })
  }
  title = 'TEST-API';
}
