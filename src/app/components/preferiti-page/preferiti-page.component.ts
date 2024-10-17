import { Component } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { iProd } from '../../interfaces/i-prod';

@Component({
  selector: 'app-preferiti-page',
  templateUrl: './preferiti-page.component.html',
  styleUrl: './preferiti-page.component.scss'
})
export class PreferitiPageComponent {

  preferiti:iProd[] =[];
  constructor(private ProdSvc: ProductServiceService){}

}
