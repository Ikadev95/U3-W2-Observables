import { iObj } from '../../interfaces/i-obj';
import { iProd } from '../../interfaces/i-prod';
import { ProductServiceService } from './../../services/product-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  prods: iProd[] = [];
 constructor(private ProdService: ProductServiceService){}
 ngOnInit(): void {
  this.ProdService.getAllproducts().subscribe(
    (prodotti:any) => {
      this.prods = prodotti.products;
      console.log(this.prods)
    }
  )
 }
}
