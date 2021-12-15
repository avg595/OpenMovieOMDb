import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie';
import { MovieData } from '../models/movieData';

@Injectable({
  providedIn: 'root'
})
export class ApiOmdbapiService {

  constructor(private http: HttpClient) { }

  private apiKey = '7a246f6';
  private url = `${environment.base_url}?apikey=${this.apiKey}`;

  getMovies(name: string, page?: number): Observable<Movie<MovieData>> {
    return this.http.get<Movie<MovieData>>(`${this.url}&s=${name}`);
  }
}
