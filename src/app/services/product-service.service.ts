import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iProd } from '../interfaces/i-prod';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  apiUrl:string = 'https://dummyjson.com/products'

  constructor(
    private http:HttpClient
  ) { }

  getAllproducts(){
    return this.http.get<iProd[]>(this.apiUrl)
  }
}
