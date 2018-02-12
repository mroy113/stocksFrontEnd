import {Component, OnInit} from '@angular/core';
import {Stock} from './stock';
import {StockService} from './stock.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocksList.component.html'
})

export class StocksListComponent implements OnInit {
  constructor(public $stockService: StockService) {
  }
  title = '<(o_O<)  Stock Matrix  (>O_o)>';
  columnHeaders: String[] = [
    ' ',
    'Company',
    'Price',
    'Change',
    'Change Percent'
  ];
  stockList: Stock[];
  sortedStockList: Stock[];

  sortList(): void {
    console.log('clicked filter Button');
    this.sortedStockList = this.stockList;
    this.sortStockList();
  }
  sortStockList(): void {
    this.sortedStockList.sort((stockA, stockB) => {
      const nameA = stockA.companyName.toLocaleLowerCase();
      const nameB = stockB.companyName.toLocaleLowerCase();
      if (nameA > nameB) { return 1; }
      if (nameA < nameB) { return -1; }
      return 0;
    });
  }
  ngOnInit(): void {
    this.$stockService.getStocks().subscribe(stocks => this.stockList = stocks);

  }
}

