import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ChartDemoModule } from './components/chart-demo/chart-demo.module';
import { IntramitableModule } from './components/intramitable/intramitable.module';
import { PercentageBarModule } from './components/percentage-bar/percentage-bar.module';
import { StrategyPopUpModule } from './components/strategy-pop-up/strategy-pop-up.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StrategyPopUpModule,
    PercentageBarModule,
    ChartDemoModule,
    BrowserAnimationsModule,
    IntramitableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
