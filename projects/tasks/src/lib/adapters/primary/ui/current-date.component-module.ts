import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentDateComponent } from './current-date.component';

@NgModule({ imports: [CommonModule],
  	declarations: [CurrentDateComponent],
  	providers: [],
  	exports: [CurrentDateComponent] })
export class CurrentDateComponentModule {
}
