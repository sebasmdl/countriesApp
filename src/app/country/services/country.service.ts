import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/country-interface';
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private api_url = "https://restcountries.com/v3.1";
  get httpParams(){
    return new HttpParams().set('fields','name,capital,flags,population,cca2,translations')
  }
  constructor(private http: HttpClient) { }

  searchByCountry(termino:string): Observable<Country[]>{

    const url = `${this.api_url}/name/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});

  }
  searchByCapital(termino:string): Observable<Country[]>{

    const url = `${this.api_url}/capital/${termino}`;
    return this.http.get<Country[]>(url);

  }
  countryDetail(code:string): Observable<Country>{

    const url = `${this.api_url}/alpha/${code}`;
    return this.http.get<Country>(url, {params: this.httpParams});

  }
  searchByRegion(code:string): Observable<Country[]>{
    const url = `${this.api_url}/region/${code}`;
    return this.http.get<Country[]>(url, {params: this.httpParams}).pipe(
      tap(console.log)  
    );

  }
}
