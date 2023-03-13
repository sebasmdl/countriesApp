import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country-interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {

  term: string = 'Hola mundo';
  error!: string;
  showError!: boolean;
  countries: Country[] = []
  constructor(private byc_service: CountryService) { }

  search(){
    this.byc_service.searchByCountry(this.term).subscribe({
      next: (countries) => this.countries = countries,
      
      error: (e) => {
        this.error = `${this.term} ${e.error.message}`;
        this.showError = true
        this.countries = []
        setTimeout(() => {
          this.showError = false
        },5000)
      },

      complete: () => console.info('complete') 
    })
  }
}
