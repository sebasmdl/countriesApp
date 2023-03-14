import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country-interface';
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private api_url = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) { }

  searchByCountry(termino:string): Observable<Country[]>{

    const url = `${this.api_url}/name/${termino}`;
    return this.http.get<Country[]>(url);

  }
  searchByCapital(termino:string): Observable<Country[]>{

    const url = `${this.api_url}/capital/${termino}`;
    return this.http.get<Country[]>(url);

  }
  countryDetail(code:string): Observable<Country>{

    const url = `${this.api_url}/alpha/${code}`;
    return this.http.get<Country>(url);

  }
}
