import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TasksListPage } from './tasks-list.page';
import {
  CreateTaskFormComponentModule,
  CurrentDateComponentModule,
  FirebaseFooterImagesServiceModule,
  FirebaseTasksServiceModule,
  FooterComponentModule,
  TasksListComponentModule,
} from '@tasks';
import { FirebaseDateServiceModule } from '../../../projects/tasks/src/lib/adapters/secondary/infrastructure/firebase-date.service-module';
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
    RouterModule.forChild([
      {
        path: '',
        component: TasksListPage,
      },
    ]),
    FirebaseDateServiceModule,
  ],
  declarations: [TasksListPage],
  providers: [],
  exports: [],
})
export class TasksListPageModule {}
