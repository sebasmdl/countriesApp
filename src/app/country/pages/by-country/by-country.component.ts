import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country-interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {
  country: string = '';
  error!: string;
  showError!: boolean;
  countries: Country[] = []
  suggestedCountries: Country[] = []
  showSuggestions:boolean = false;
  constructor(private byc_service: CountryService) { }

  search(country:string, enter:boolean){
    if(country === this.country && enter) { return;}
    this.country = country
    this.showSuggestions = false;
    this.byc_service.searchByCountry(this.country).subscribe({
      next: (countries) => this.countries = countries,      
      error: (e) => {
        this.error = `${country} ${e.error.message}`;
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
    this.showSuggestions = true;
    this.country = country;
    this.byc_service.searchByCountry(country).subscribe({
      next: (countries) => this.suggestedCountries = countries.splice(0,5),
      error: (error) => this.suggestedCountries = []
    })
   }
   searchSuggestions(country:string){
      this.search(country, false);
   }
}
