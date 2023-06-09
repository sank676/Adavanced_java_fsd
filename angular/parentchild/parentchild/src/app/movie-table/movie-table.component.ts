import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css']
})
export class MovieTableComponent {
  @Input()
  movieList: Array<string> = [];

  @Output()
  movieSelectedEventEmitter =  new EventEmitter();


  constructor() {}
  ngOnit(): void{

  }
  
  movieSelected(selectedMovie: string) { this.movieSelectedEventEmitter.emit(selectedMovie);}

}
