import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';
import { MovieResultService } from '../../services/movie-result.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit, OnDestroy {

  @Output() movieNameEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() addFavoriteEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  form = this.fb.group({
    name: ['', Validators.required]
  });

  isFavorite = false;

  subscription: Subscription = new Subscription();
  subscriptionF: Subscription = new Subscription();

  constructor(private fb: FormBuilder, private movieResultService: MovieResultService) { }

  ngOnInit(): void {
    this.subscription = this.form.controls['name'].valueChanges
      .pipe(debounceTime(1000))
      .subscribe(change => {
        if (change) {
          this.movieNameEvent.emit(this.form.controls['name'].value);

          this.subscriptionF.unsubscribe();
          this.subscriptionF = this.movieResultService.favoriteMoivesSubject$.subscribe(data => {
            const movieFavoriteResult = data.filter(movie => movie.name === this.form.controls['name'].value);
            if (movieFavoriteResult.length > 0) {
              this.isFavorite = true;
            } else {
              this.isFavorite = false;
            }
          });
        }
    });

  }

  addFavorite(): void {
    this.addFavoriteEvent.emit(true);
  }

  submit(): void {
    // console.log(this.form.value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscriptionF.unsubscribe();
  }
}
