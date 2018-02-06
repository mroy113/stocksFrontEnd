import {Component, OnInit} from '@angular/core';
import {Stock} from './stock';
import {StockService} from './stock.service';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocksList.component.html',
  providers: [StockService]
})

export class StocksListComponent implements OnInit {
  constructor(private http: HttpClient) {
  }
  stockUrl = 'http://localhost:8000/api/stocks';
  title = 'Stock Matrix';
  kirbyLeft = '<(o_O<)';
  kirbyRight = '(>O_o)>';
  colHead_CompanyName = 'Company';
  colHead_StockPrice = 'Price';
  colHead_Change = 'Change';
  colHead_ChangePercent = 'Change Percent';
  stockList: Stock[];
  /*
  ngOnInit(): void {
    this.stockList = this.stockService.getStocks();
    console.log('stock list' + this.stockList);
    console.log('stock list' + this.stockList);
  }
  */
  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/stocks')
      .subscribe(response => console.log(response));
  }
}

