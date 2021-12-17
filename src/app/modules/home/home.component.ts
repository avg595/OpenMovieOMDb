import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiOmdbapiService } from 'src/app/core/api/api-omdbapi.service';
import { MovieData } from 'src/app/core/models/movieData';
import { MovieResultService } from 'src/app/shared/services/movie-result.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  movies: MovieData[] = [];
  favoriteMoives: any[] = [];
  currentMovieName = '';

  subscription: Subscription = new Subscription();

  constructor(private apiOmdbapiService: ApiOmdbapiService, private movieResultService: MovieResultService) { }

  ngOnInit(): void {
  }

  onMovieNameEvent(movieName: string): void {
    this.getMoviesByName(movieName);
  }

  addFavoriteEvent(isFavorite: boolean): void {
    if (this.currentMovieName) {
      this.movieResultService.favoriteMovies({name: this.currentMovieName, isFavorite, count: 1});
    }
  }

  getMoviesByName(movieName: string): void {
    this.movies = [];
    this.currentMovieName = '';

    this.apiOmdbapiService.getMovies(movieName).subscribe(data => {
      if (data.Response === 'True') {
        data.Search.forEach(movieData => {
          this.movies.push(movieData);
        });

        this.currentMovieName = movieName;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
