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
  stockList: Stock[] = [];

  ngOnInit(): void {
    this.$stockService.getStocks().subscribe(stocks => this.stockList = stocks);
  }
}

