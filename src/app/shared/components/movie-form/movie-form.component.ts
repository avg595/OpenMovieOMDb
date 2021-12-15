import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit, OnDestroy {

  @Output() movieNameEvent: EventEmitter<string> = new EventEmitter<string>();

  form = this.fb.group({
    name: ['', Validators.required]
  });

  subscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.subscription = this.form.controls['name'].valueChanges
      .pipe(debounceTime(1000))
      .subscribe(change => {
        if (change) {
          this.movieNameEvent.emit(change);
        }
    });
  }

  submit(): void {
    // console.log(this.form.value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
