import { Injectable } from '@angular/core';
import { Subject, Observable, of, BehaviorSubject} from 'rxjs';
import { MovieData } from 'src/app/core/models/movieData';

@Injectable({
  providedIn: 'root'
})
export class MovieResultService {

  private movieDetailSubject: Subject<MovieData> = new Subject<MovieData>();
  movieDetailSubject$ = this.movieDetailSubject.asObservable();

  private favoriteMoives: any[] = [];
  private favoriteMoivesSubject = new BehaviorSubject<any[]>([]);
  favoriteMoivesSubject$ = this.favoriteMoivesSubject.asObservable();

  constructor() { }

  movieDetailSelected(movieData: MovieData): void {
    this.movieDetailSubject.next(movieData);
  }

  favoriteMovies(val: any): void {
    if (this.favoriteMoives.length > 0) {
      const movieResult = this.favoriteMoives.filter(movie => movie.name === val.name);
      if (movieResult.length > 0) {
        movieResult[0].count ++;
      } else {
        this.favoriteMoives.push(val);
      }
    } else {
      this.favoriteMoives.push(val);
    }

    this.favoriteMoivesSubject.next(this.favoriteMoives);
  }
}
