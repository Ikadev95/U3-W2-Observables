import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iProd } from '../interfaces/i-prod';
import { Subject } from 'rxjs';
import { iObj } from '../interfaces/i-obj';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  apiUrl:string = 'https://dummyjson.com/products'
  pref:iProd[] = []
  cart$ = new Subject<iProd>()

  constructor(
    private http:HttpClient
  ) { }

  getAllproducts(){
    return this.http.get<iObj>(this.apiUrl)
  }
  getProdById(id:number){
    return this.http.get<iProd>(`${this.apiUrl}/${id}`)
  }
  getPref(){
    return this.pref
  }
  addPref(prod:iProd){
    this.pref.push(prod);
  }
  addToCart(prod:iProd){
    this.cart$.next(prod);
  }
}
