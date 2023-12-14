import { Injectable } from '@angular/core';
import { Icities } from '../interfaces/icities';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  cities: Icities[] = [
    {
      name: 'Aswan',
      attractionSites: ['Abu-simbel', 'Nubian Museum', 'Elephantine'],
    },
    {
      name: 'Cairo',
      attractionSites: ['The Pyramids', 'Nile', 'Khan'],
    },
    {
      name: 'Luxor',
      attractionSites: ['Kings', 'Karnak', 'Luxor Template'],
    },
    {
      name: 'Sharm El-Sheikh',
      attractionSites: ['Naama', 'Ras Muhammad National Park', 'Karnak'],
    },
  ];

  constructor() {}
  getAllCities(): Icities[] {
    return this.cities;
  }
  getAllCitiesName(): string[] {
    return this.cities.map((city) => city.name);
  }
}
