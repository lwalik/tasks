import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDeleteModalComponent } from './confirm-delete-modal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ConfirmDeleteModalComponent],
  providers: [],
  exports: [ConfirmDeleteModalComponent],
})
export class ConfirmDeleteModalComponentModule {}
