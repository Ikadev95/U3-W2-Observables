import { iProd } from './../../interfaces/i-prod';
import { iObj } from '../../interfaces/i-obj';
import { ProductServiceService } from './../../services/product-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  constructor(private ProdSvc: ProductServiceService){}

  prods: iProd[] = [];
  preferiti:iProd[] =[];

 ngOnInit(): void {

  this.ProdSvc.getAllproducts().subscribe(
    (prodotti:iObj) => {
      this.prods = prodotti.products;

    }
  )

  this.preferiti = this.ProdSvc.getPref()
  console.log(this.preferiti)

 }



}
