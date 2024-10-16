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

  constructor(private ProdService: ProductServiceService){}

  prods: iProd[] = [];
  preferiti:iProd[] =[];

  pref(id:number){
    this.ProdService.getProdById(id).subscribe(
      (prod:iProd) => {
        this.ProdService.addPref(prod)
      }
    )
  }



 ngOnInit(): void {

  this.ProdService.getAllproducts().subscribe(
    (prodotti:any) => {
      this.prods = prodotti.products;
      console.log(this.prods)
    }
  )

  this.preferiti = this.ProdService.getPref()
 }

}
