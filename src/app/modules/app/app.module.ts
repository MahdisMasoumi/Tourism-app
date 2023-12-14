import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component';
import { WeatherComponent } from '../../weather/weather.component';
import { WeatherDetailsComponent } from '../../weather-details/weather-details.component';
import { AppRoutes } from '../../app.routes';

@NgModule({
  declarations: [AppComponent, WeatherComponent, WeatherDetailsComponent],
  imports: [BrowserModule, AppRoutes],
  exports: [BrowserModule, AppRoutes],
})
export class AppModule {}
