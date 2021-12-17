import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieResultService } from '../../services/movie-result.service';

@Component({
  selector: 'app-movie-favorite',
  templateUrl: './movie-favorite.component.html',
  styleUrls: ['./movie-favorite.component.scss']
})
export class MovieFavoriteComponent implements OnInit, OnDestroy {

  favoriteMovies: any[] = [];

  subscription: Subscription = new Subscription();

  constructor(private movieResultService: MovieResultService) { }

  ngOnInit(): void {
    this.subscription = this.movieResultService.favoriteMoivesSubject$.subscribe(data => {
      this.favoriteMovies = data;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
