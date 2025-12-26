import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cards } from '../models/cards';
@Injectable({
  providedIn: 'root'
})
export class CardsService {
private url ="https://sheetdb.io/api/v1/6m33xa78r4099"
  constructor(private http: HttpClient) { }
  getdata(): Observable<Cards[]> {
    return this.http.get<Cards[]> (this.url);
  }
}
