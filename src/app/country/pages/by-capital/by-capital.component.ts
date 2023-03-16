import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country-interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent {
  capital: string = 'Hola mundo';
  error!: string;
  showError!: boolean;
  countries: Country[] = []
  constructor(private byc_service: CountryService) { }

  search(capital:string){
    if(capital === this.capital) { return;}
    this.capital = capital
    this.byc_service.searchByCapital(this.capital).subscribe({
      next: (countries) => this.countries = countries,
      
      error: (e) => {
        this.error = `${this.capital} ${e.error.message}`;
        this.showError = true
        this.countries = []
        setTimeout(() => {
          this.showError = false
        },5000)
      },

      complete: () => console.info('complete') 
    })
  }
  suggestions(capital:string){
    this.showError = false;
    console.log(capital, 'suggest')
  }
}
