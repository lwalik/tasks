import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskFormComponent } from './create-task-form.component';

@NgModule({ imports: [CommonModule],
  	declarations: [CreateTaskFormComponent],
  	providers: [],
  	exports: [CreateTaskFormComponent] })
export class CreateTaskFormComponentModule {
}
