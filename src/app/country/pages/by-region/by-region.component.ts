import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country-interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent implements OnInit {
  
  regions:string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC',];
  regionActivated:string = '';
  countries: Country[] = []
  error!: string;
  showError!: boolean;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }
  searchRegion(region:string){
    if(region === this.regionActivated) { return;}
    this.regionActivated = region
    this.countries = []
    this.countryService.searchByRegion(region).subscribe(countries => {
      this.countries = countries
    },(e) => {
      this.error = `${region} ${e.error.message}`;
      this.showError = true
      this.countries = []
      setTimeout(() => {
        this.showError = false
      },2000)
    },)  
  }
  getCssClass(region:string){
    return (region === this.regionActivated) ? 'btn btn-primary' :'btn btn-outline-primary'
  }

}
