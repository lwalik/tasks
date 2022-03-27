import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './tasks-list.component';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [CommonModule, RouterModule, BsDropdownModule.forRoot()],
  declarations: [TasksListComponent],
  providers: [],
  exports: [TasksListComponent],
})
export class TasksListComponentModule {}
