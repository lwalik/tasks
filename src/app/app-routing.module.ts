import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentDateComponentModule } from '@tasks';
import { HomePageModule } from './pages/home.page-module';
import { TasksListPageModule } from './pages/tasks-list.page-module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomePageModule,
  },
  {
    path: 'tasksList',
    loadChildren: () => TasksListPageModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
