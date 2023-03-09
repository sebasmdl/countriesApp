import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';



@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent
  ]
})
export class CountryModule { }
