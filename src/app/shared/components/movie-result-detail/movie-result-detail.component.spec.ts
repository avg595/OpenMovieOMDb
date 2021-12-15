import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieResultDetailComponent } from './movie-result-detail.component';

describe('MovieResultDetailComponent', () => {
  let component: MovieResultDetailComponent;
  let fixture: ComponentFixture<MovieResultDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieResultDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieResultDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
