import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { iProd } from '../../interfaces/i-prod';

@Component({
  selector: 'app-preferiti-page',
  templateUrl: './preferiti-page.component.html',
  styleUrl: './preferiti-page.component.scss'
})
export class PreferitiPageComponent implements OnInit{

  preferiti:iProd[] =[];
  constructor(private ProdSvc: ProductServiceService){}
  ngOnInit(): void {
    this.ProdSvc.pref$.subscribe( el => {
      if(!(this.preferiti.some(product => product.id === el.id)))
      this.preferiti.push(el)})
   }
  }

