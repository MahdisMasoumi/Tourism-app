import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { HomeComponent } from './home/home.component';
import { CitiesComponent } from './cities/cities.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'weather', component: WeatherComponent },
];
