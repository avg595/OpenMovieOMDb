import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// primeng imports

// const primeNgModules = [];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // ...primeNgModules
  ],
  exports: [
    CommonModule,
    // ...primeNgModules
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
