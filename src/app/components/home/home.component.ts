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

  pref(id:number){
    this.ProdSvc.getProdById(id).subscribe(
      (prod:iProd) => {
        if(!(this.preferiti.some(product => product.id === id))){
          this.ProdSvc.addPref(prod)
        }
      }
    )
  }



 ngOnInit(): void {

  this.ProdSvc.getAllproducts().subscribe(
    (prodotti:any) => {
      this.prods = prodotti.products;
      console.log(this.prods)
    }
  )

  this.preferiti = this.ProdSvc.getPref()
  console.log(this.preferiti)
 }

}
