import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iProd } from '../interfaces/i-prod';
import { ReplaySubject, Subject } from 'rxjs';
import { iObj } from '../interfaces/i-obj';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  apiUrl: string = 'https://dummyjson.com/products'
  cart$ = new Subject<iProd>()
  pref$ = new ReplaySubject<iProd>()

  constructor(private http: HttpClient) { }

  getAllproducts(){
    return this.http.get<iObj>(this.apiUrl)
  }

  getProdById(id: number){
    return this.http.get<iProd>(`${this.apiUrl}/${id}`)
  }

  addPref(prod: iProd){
    this.pref$.next(prod);
  }

  addToCart(prod: iProd){
    this.cart$.next(prod);
  }
}
