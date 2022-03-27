import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskFormComponent } from './create-task-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    BsDropdownModule.forRoot(),
  ],
  declarations: [CreateTaskFormComponent],
  providers: [],
  exports: [CreateTaskFormComponent],
})
export class CreateTaskFormComponentModule {}
