import { Component, Input, OnInit } from '@angular/core';
import { iProd } from '../../interfaces/i-prod';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit {

  constructor(private ProdSvc: ProductServiceService){}

  @Input() prod!:iProd

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

    this.preferiti = this.ProdSvc.getPref()
    console.log(this.preferiti)
   }

}
