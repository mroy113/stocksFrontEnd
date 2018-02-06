import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Stock} from './stock';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StockService {
  stockUrl = 'http://localhost:8000/api/stocks';
  constructor(private $http: HttpClient) {
  }

  getStocks(): Observable<Stock[]> {
    return this.$http.get<Stock[]>(this.stockUrl);
  }
}
