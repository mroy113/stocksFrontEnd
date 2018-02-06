import {Component, OnChanges, OnInit} from '@angular/core';
import {Stock} from './stock';
import {StockService} from './stock.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocksList.component.html'
})

export class StocksListComponent implements OnInit {
  constructor(private $stockService: StockService) {
  }
  title = '<(o_O<)  Stock Matrix  (>O_o)>';
  columnHeaders: String[] = ['', 'Company', 'Price', 'Change', 'Change Percent'];
  stockList: Stock[] = [];

  ngOnInit(): void {
    this.$stockService.getStocks().subscribe(stocks => this.stockList = stocks);
  }
}

