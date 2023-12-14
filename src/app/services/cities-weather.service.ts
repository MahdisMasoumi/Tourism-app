import { Injectable } from '@angular/core';
import { Iweather } from '../interfaces/iweather';

@Injectable({
  providedIn: 'root',
})
export class CitiesWeatherService {
  citiesWeather: Iweather[] = [
    {
      name: 'Aswan',
      springN: 15,
      springM: 28,
      summerN: 25,
      summerM: 40,
      winterN: 8,
      winterM: 20,
      autumnN: 18,
      autumnM: 32,
      visitFrom: 'October',
      visitTo: 'April',
    },
    {
      name: 'Cairo',
      springN: 15,
      springM: 28,
      summerN: 25,
      summerM: 40,
      winterN: 8,
      winterM: 20,
      autumnN: 18,
      autumnM: 32,
      visitFrom: 'December',
      visitTo: 'May',
    },
    {
      name: 'Luxor',
      springN: 15,
      springM: 28,
      summerN: 25,
      summerM: 40,
      winterN: 8,
      winterM: 20,
      autumnN: 18,
      autumnM: 32,
      visitFrom: 'June',
      visitTo: 'July',
    },
    {
      name: 'Sharm El-Sheikh',
      springN: 15,
      springM: 28,
      summerN: 25,
      summerM: 40,
      winterN: 8,
      winterM: 20,
      autumnN: 18,
      autumnM: 32,
      visitFrom: 'August',
      visitTo: 'December',
    },
  ];

  constructor() {}
  getWeather(): Iweather[] {
    return this.citiesWeather;
  }
  // getWeatherDetailsByName(cityName: string): Iweather | undefined {
  //   return this.citiesWeather.find((city) => city.name === cityName);
  // }
}
