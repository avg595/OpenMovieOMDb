import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MovieFormComponent } from './components/movie-form/movie-form.component';

// primeng imports
import { InputTextModule } from 'primeng/inputtext';

const primeNgModules = [
  InputTextModule
];

@NgModule({
  declarations: [
    MovieFormComponent
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
