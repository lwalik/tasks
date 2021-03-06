import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { CreateTaskFormPageModule } from './create-task-form.page-module';
import {
  CurrentDateComponentModule,
  FirebaseDateServiceModule,
  FirebaseFooterImagesServiceModule,
  FooterComponentModule,
} from '@tasks';

@NgModule({
  imports: [
    CommonModule,
    FooterComponentModule,
    CurrentDateComponentModule,
    FirebaseFooterImagesServiceModule,
    FirebaseDateServiceModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
      {
        path: 'createTask',
        loadChildren: () => CreateTaskFormPageModule,
      },
    ]),
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
