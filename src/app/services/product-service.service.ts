import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iProd } from '../interfaces/i-prod';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  apiUrl:string = 'https://dummyjson.com/products'
  pref:iProd[] = []

  constructor(
    private http:HttpClient
  ) { }

  getAllproducts(){
    return this.http.get<iProd[]>(this.apiUrl)
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
}
