import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country, Translation } from '../../interfaces/country-interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  country!:Country
  translations!:any[];
  constructor(private activatedRoute: ActivatedRoute, 
              private countryServie:CountryService) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.countryServie.countryDetail(id)),
      tap(console.log)
    )
    .subscribe(country => {
      this.country = country
      this.translations = Object.entries(this.country.translations).map(el => el[1].common)
    })
  } 

}
