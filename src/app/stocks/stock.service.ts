import { Injectable } from '@angular/core';
import {Stock} from './stock';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StockService {
  private _stockUrl = 'http://localhost:8000/api/stocks';
  constructor(private _http: HttpClient) {
  }

  getStocks(): Observable<Stock[]> {
    return this._http.get<Stock[]>(this._stockUrl);
  }
}
