import { Component, OnInit } from '@angular/core';
import { Iweather } from '../interfaces/iweather';
import { CommonModule } from '@angular/common';
import { CitiesWeatherService } from '../services/cities-weather.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
})
export class WeatherComponent implements OnInit {
  citiesWeather!: Iweather[];

  constructor(private cityWeatherService: CitiesWeatherService) {}

  ngOnInit() {
    this.citiesWeather = this.cityWeatherService.getWeather();
  }
}
