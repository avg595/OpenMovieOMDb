import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MovieData } from 'src/app/core/models/movieData';

@Injectable({
  providedIn: 'root'
})
export class MovieResultService {

  private movieDetailSubject: Subject<MovieData> = new Subject<MovieData>();
  movieDetailSubject$ = this.movieDetailSubject.asObservable();

  constructor() { }

  movieDetailSelected(movieData: MovieData): void {
    this.movieDetailSubject.next(movieData);
  }
}
