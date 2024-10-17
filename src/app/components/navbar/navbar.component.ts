import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { iProd } from '../../interfaces/i-prod';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  cart: iProd[] =[];
  constructor(private ProdSvc: ProductServiceService){}
  ngOnInit(): void {
    this.ProdSvc.cart$.subscribe(prod => this.cart.push(prod))
    console.log(this.cart);
  }

}
