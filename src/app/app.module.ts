import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StocksListComponent } from './stocks/stocksList.component';
import { StockService } from './stocks/stock.service';

@NgModule({
  declarations: [
    AppComponent,
    StocksListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [StockService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
