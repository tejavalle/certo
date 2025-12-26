import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Navbar } from '../models/navbar'; 

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
private url="http://localhost:8080/api/v1/getall";
  constructor(private http:HttpClient) { }
  getall():Observable<Navbar[]>{
    return this.http.get<Navbar[]>(this.url);
  }
}

