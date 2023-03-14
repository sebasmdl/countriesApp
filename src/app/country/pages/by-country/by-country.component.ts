import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country-interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {
  country: string = 'Hola mundo';
  error!: string;
  showError!: boolean;
  countries: Country[] = []
  constructor(private byc_service: CountryService) { }

  search(country:string){
    this.country = country
    this.byc_service.searchByCountry(this.country).subscribe({
      next: (countries) => this.countries = countries,
      
      error: (e) => {
        this.error = `${this.country} ${e.error.message}`;
        this.showError = true
        this.countries = []
        setTimeout(() => {
          this.showError = false
        },5000)
      },

      complete: () => console.info('complete') 
    })
  }
  suggestions(country:string){
    this.showError = false;
    console.log(country, 'suggest')
  }
}
