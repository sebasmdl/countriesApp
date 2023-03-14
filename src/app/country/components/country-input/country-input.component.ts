import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { debounceTime, Subject } from 'rxjs'
@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css']
})
export class CountryInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder!: string;
  country: string = '';
  debouncer: Subject<string> = new Subject();
  constructor() { } 

  ngOnInit(): void {
    this.debouncer.pipe(
      debounceTime(300)
    )
    .subscribe( valor => {
      this.onDebounce.emit(valor)
      console.log('debauncer', valor)
    })
  }
  keyPressed(){
    this.debouncer.next(this.country);
  }
  search(){
    this.onEnter.emit(this.country)
  }

}
