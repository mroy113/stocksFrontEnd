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
