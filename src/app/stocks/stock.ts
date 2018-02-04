import {Url} from 'url';

export class Stock {

  private _companyName: string;
  private _companyURL: Url;
  private _stockPrice_current: number;
  private _stockPrice_yesterdayClosing: number;
  private _stockPriceHistDif: number;
  private _stockPriceHistDifPercent: number;

  calculateHistDif(): number {
    return (this._stockPrice_current - this._stockPrice_yesterdayClosing);
  }
  calculateHistDifPercent(): number {
    return ((this._stockPrice_current / this._stockPrice_yesterdayClosing) - 1);
  }
  get companyName(): string {
    return this._companyName;
  }

  set companyName(value: string) {
    this._companyName = value;
  }
  get companyURL(): Url {
    return this._companyURL;
  }

  set companyURL(value: Url) {
    this._companyURL = value;
  }
  get stockPrice_current(): number {
    return this._stockPrice_current;
  }

  set stockPrice_current(value: number) {
    this._stockPrice_current = value;
  }
  get stockPrice_yesterdayClosing(): number {
    return this._stockPrice_yesterdayClosing;
  }

  set stockPrice_yesterdayClosing(value: number) {
    this._stockPrice_yesterdayClosing = value;
  }
  get stockPriceHistDif(): number {
    return this._stockPriceHistDif;
  }

  set stockPriceHistDif(value: number) {
    this._stockPriceHistDif = value;
  }
  get stockPriceHistDifPercent(): number {
    return this._stockPriceHistDifPercent;
  }

  set stockPriceHistDifPercent(value: number) {
    this._stockPriceHistDifPercent = value;
  }
}
