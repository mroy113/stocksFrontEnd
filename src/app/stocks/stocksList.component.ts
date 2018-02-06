import {Component, OnInit} from '@angular/core';
import {Stock} from './stock';
import {StockService} from './stock.service';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocksList.component.html',
  providers: [StockService]
})

export class StocksListComponent implements OnInit {
  constructor(private $http: HttpClient) {
  }
  stockUrl = 'http://localhost:8000/api/stocks';
  title = 'Stock Matrix';
  kirbyLeft = '<(o_O<)';
  kirbyRight = '(>O_o)>';
  colHead_CompanyName = 'Company';
  colHead_StockPrice = 'Price';
  colHead_Change = 'Change';
  colHead_ChangePercent = 'Change Percent';
  stockList: Stock[] = [];
  tempStock: any;
  /*
  ngOnInit(): void {
    this.stockList = this.stockService.getStocks();
    console.log('stock list' + this.stockList);
    console.log('stock list' + this.stockList);
  }
  */
  getStocks(): Observable<Stock[]> {
    return this.$http.get<Stock[]>('http://localhost:8000/api/stocks');
 //     .do(data => console.log('All: ' + JSON.stringify(data)))
 //     .catch(this.handleError);
  }
  printStocks(): void {
    this.$http.get('http://localhost:8000/api/stocks')
      .subscribe(response => console.log(response));
  }
  testPrint(tempStock) {
    console.log(tempStock);
}
  ngOnInit(): void {
    this.getStocks().subscribe(stocks => this.stockList = stocks);
    this.printStocks();
  }


}

