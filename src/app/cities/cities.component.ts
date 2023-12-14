import { Component, OnInit } from '@angular/core';
import { CityService } from '../services/city.service';
import { Icities } from '../interfaces/icities';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css',
})
export class CitiesComponent implements OnInit {
  cities: Icities[];
  color: boolean;

  constructor(private cityService: CityService, private router: Router) {
    this.cities = this.cityService.getAllCities();
    this.color = this.colorit();
  }

  ngOnInit() {}

  colorit() {
    for (let i = 0; i < this.cities.length; i++) {
      if (this.cities[i].attractionSites.length >= 3) {
        return true;
      }
    }
    return false;
  }
}
