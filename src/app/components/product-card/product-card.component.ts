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

  addToCart(prod:iProd){
    this.ProdSvc.addToCart(prod)
  }
  addToPref(prod:iProd){
    this.ProdSvc.addPref(prod)
    }

  ngOnInit(): void {

   }

}
