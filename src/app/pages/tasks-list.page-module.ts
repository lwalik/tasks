import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TasksListPage } from './tasks-list.page';
import {
  ConfirmDeleteModalComponentModule,
  CreateTaskFormComponentModule,
  CurrentDateComponentModule,
  FirebaseFooterImagesServiceModule,
  FirebaseTasksServiceModule,
  FooterComponentModule,
  InMemoryTaskStorageModule,
  TasksListComponentModule,
  DateServiceModule,
} from '@tasks';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    FirebaseTasksServiceModule,
    TasksListComponentModule,
    CurrentDateComponentModule,
    FooterComponentModule,
    FirebaseFooterImagesServiceModule,
    ModalModule,
    ConfirmDeleteModalComponentModule,
    InMemoryTaskStorageModule,
    RouterModule.forChild([
      {
        path: '',
        component: TasksListPage,
      },
    ]),
    DateServiceModule,
  ],
  declarations: [TasksListPage],
  providers: [],
  exports: [],
})
export class TasksListPageModule {}
