import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskFormComponent } from './create-task-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [CreateTaskFormComponent],
  providers: [],
  exports: [CreateTaskFormComponent],
})
export class CreateTaskFormComponentModule {}
