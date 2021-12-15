import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MovieData } from 'src/app/core/models/movieData';
import { MovieResultService } from '../../services/movie-result.service';

@Component({
  selector: 'app-movie-result',
  templateUrl: './movie-result.component.html',
  styleUrls: ['./movie-result.component.scss']
})
export class MovieResultComponent implements OnInit, OnChanges {

  @Input() movies: MovieData[] = [];

  movieSelected!: MovieData;

  constructor(private movieResultService: MovieResultService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['movies']) {
      // console.log(this.movies);
    }
  }

  onRowSelect(event: any): void {
    // console.log(event.data);
    this.movieResultService.movieDetailSelected(event.data);
  }

  onRowUnselect(event: any): void {
    // console.log(event.data);
  }
}
