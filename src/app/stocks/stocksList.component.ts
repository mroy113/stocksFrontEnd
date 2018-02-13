import {Component, OnInit} from '@angular/core';
import {Stock} from './stock';
import {StockService} from './stock.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocksList.component.html'
})

export class StocksListComponent implements OnInit {
  constructor(public $stockService: StockService) {
    this.subscribeToStocks();
  }
  title = '<(o_O<)  Stock Matrix  (>O_o)>';
  stockList: Stock[];
  companySortSwitch = false;
  priceSortSwitch = false;

  private subscribeToStocks() {
    Observable.timer(0, 5000).subscribe(() => {
      this.getAllStocks();
    });
  }
  private getAllStocks() {
    this.$stockService.getStocks().subscribe(stocks => this.stockList = stocks);
    console.log('getAllStocks Called');
  }
  public toggleSortCompanyName(): void {
      if (this.companySortSwitch === false) {
        this.sortStockListAscending('companyName');
      } else {
        this.sortStockListDescending('companyName');
      }
      this.companySortSwitch = !this.companySortSwitch;
    }
  public toggleSortPrice(): void {
    if (this.priceSortSwitch === false) {
      this.sortStockListAscending('stockPrice_current');
    } else {
      this.sortStockListDescending('stockPrice_current');
    }
    this.priceSortSwitch = !this.priceSortSwitch;
  }
  private sortStockListAscending(atribToSort: string): void {
    this.stockList.sort((stockA, stockB) => {
        if (atribToSort === 'companyName') {
          if (stockA[atribToSort] > stockB[atribToSort]) {
            return 1;
          }
          if (stockA[atribToSort] < stockB[atribToSort]) {
            return -1;
          }
          return 0;
        } else {
          return stockB[atribToSort] - stockA[atribToSort];
        }
    });
  }
  private sortStockListDescending(atribToSort: string): void {
    this.stockList.sort((stockA, stockB) => {
      if (atribToSort === 'companyName') {
        if (stockA[atribToSort] < stockB[atribToSort]) {
          return 1;
        }
        if (stockA[atribToSort] > stockB[atribToSort]) {
          return -1;
        }
        return 0;
      } else {
        return stockA[atribToSort] - stockB[atribToSort];
      }
    });
  }
  ngOnInit(): void {
  }
}
