import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TasksListPage } from './tasks-list.page';
import { FirebaseTasksServiceModule, TasksListComponentModule } from '@tasks';

@NgModule({
  imports: [
    CommonModule,
    FirebaseTasksServiceModule,
    TasksListComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: TasksListPage,
      },
    ]),
  ],
  declarations: [TasksListPage],
  providers: [],
  exports: [],
})
export class TasksListPageModule {}
