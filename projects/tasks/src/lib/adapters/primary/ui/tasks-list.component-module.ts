import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './tasks-list.component';

@NgModule({ imports: [CommonModule],
  	declarations: [TasksListComponent],
  	providers: [],
  	exports: [TasksListComponent] })
export class TasksListComponentModule {
}
