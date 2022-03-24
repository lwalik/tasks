import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateTaskFormPage } from './create-task-form.page';
import { CreateTaskFormComponentModule } from '@tasks';

@NgModule({
  imports: [
    CommonModule,
    CreateTaskFormComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateTaskFormPage,
      },
    ]),
  ],
  declarations: [CreateTaskFormPage],
  providers: [],
  exports: [],
})
export class CreateTaskFormPageModule {}