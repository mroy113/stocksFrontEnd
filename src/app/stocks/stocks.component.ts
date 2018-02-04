import {Component} from '@angular/core';
import {Stock} from './stock';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html'
})
export class StocksComponent {
  title = 'Stock Matrix';
  kirbyLeft = '<(o_O<)';
  kirbyRight = '(>O_o)>';
  colHead_CompanyName = 'Company';
  colHead_StockPrice = 'Price';
  colHead_Change = 'Change';
  colHead_ChangePercent = 'Change Percent';
  stockList: Stock[];
}

