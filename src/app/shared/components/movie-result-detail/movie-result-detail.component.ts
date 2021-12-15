import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieData } from 'src/app/core/models/movieData';
import { MovieResultService } from '../../services/movie-result.service';

@Component({
  selector: 'app-movie-result-detail',
  templateUrl: './movie-result-detail.component.html',
  styleUrls: ['./movie-result-detail.component.scss']
})
export class MovieResultDetailComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();

  movie!: MovieData;

  constructor(private movieResultService: MovieResultService) { }

  ngOnInit(): void {
    this.subscription = this.movieResultService.movieDetailSubject$.subscribe(data => {
      this.movie = data;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
