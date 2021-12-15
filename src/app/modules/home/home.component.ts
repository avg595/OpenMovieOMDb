import { Component, OnInit } from '@angular/core';
import { ApiOmdbapiService } from 'src/app/core/api/api-omdbapi.service';
import { MovieData } from 'src/app/core/models/movieData';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: MovieData[] = [];

  constructor(private apiOmdbapiService: ApiOmdbapiService) { }

  ngOnInit(): void {
  }

  onMovieNameEvent(movieName: string): void {
    this.getMoviesByName(movieName);
  }

  getMoviesByName(movieName: string): void {
    this.movies = [];

    this.apiOmdbapiService.getMovies(movieName).subscribe(data => {
      if (data.Response === 'True') {
        data.Search.forEach(movieData => {
          this.movies.push(movieData);
        });
      }
    });
  }
}
