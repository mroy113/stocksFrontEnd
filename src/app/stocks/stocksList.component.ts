import {Component, OnChanges, OnInit} from '@angular/core';
import {Stock} from './stock';
import {StockService} from './stock.service';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocksList.component.html'
})

export class StocksListComponent implements OnInit {
  constructor(private $stockService: StockService) {
  }
  // stockUrl = 'http://localhost:8000/api/stocks';
  title = 'Stock Matrix';
  kirbyLeft = '<(o_O<)';
  kirbyRight = '(>O_o)>';
  columnHeaders: String[] = ['', 'Company', 'Price', 'Change', 'Change Percent'];
  stockList: Stock[] = [];

  // getStocks(): Observable<Stock[]> {
  //   return this.$http.get<Stock[]>(this.stockUrl);
  // }
  // printStocks(): void {
  //   this.$http.get('http://localhost:8000/api/stocks')
  //     .subscribe(response => console.log(response));
  // }
  ngOnInit(): void {
    this.$stockService.getStocks().subscribe(stocks => this.stockList = stocks);
  }
}

