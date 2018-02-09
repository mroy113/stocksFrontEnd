export class Stock {

  public companyNameShort: string;
  public companyName: string;
  public companyURL: string;
  public stockPrice_current: number;
  public stockPrice_yesterday: number;
  public stockPriceHistDif: number;
  public stockPriceHistDifPercent: number;

  calculateHistDif(): number {
    return (this.stockPrice_current - this.stockPrice_yesterday);
  }
  calculateHistDifPercent(): number {
    return ((this.stockPrice_current / this.stockPrice_yesterday) - 1);
  }
}
  Stock.prototype.companyName = 'myCompany';
  Stock.prototype.companyNameShort = 'MYCOM';
  Stock.prototype.companyURL = 'www.google.com';
  Stock.prototype.stockPrice_current = 1324.45;
  Stock.prototype.stockPrice_yesterday = 1502.00;
