import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { MovieResultComponent } from './components/movie-result/movie-result.component';
import { MovieResultDetailComponent } from './components/movie-result-detail/movie-result-detail.component';
import { MovieFavoriteComponent } from './components/movie-favorite/movie-favorite.component';

// primeng imports
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ImageModule } from 'primeng/image';

const primeNgModules = [
  InputTextModule,
  TableModule,
  ImageModule
];

@NgModule({
  declarations: [
    MovieFormComponent,
    MovieResultComponent,
    MovieResultDetailComponent,
    MovieFavoriteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    primeNgModules
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MovieFormComponent,
    MovieResultComponent,
    MovieResultDetailComponent,
    MovieFavoriteComponent,
    primeNgModules
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
        ngModule: SharedModule,
        providers: []
    };
  }
}
