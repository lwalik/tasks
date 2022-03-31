import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';

import {
  TaskDtoStoragePort,
  TASK_DTO_STORAGE,
} from '../../../application/ports/secondary/task-dto.storage-port';
import { BsModalRef } from 'ngx-bootstrap/modal';
import {
  RemovesTaskDtoPort,
  REMOVES_TASK_DTO,
} from '../../../application/ports/secondary/removes-task.dto-port';

@Component({
  selector: 'lib-confirm-delete-modal',
  templateUrl: './confirm-delete-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDeleteModalComponent {
  task$: Observable<TaskDTO> = this._getSelectedTask.asObservable();

  constructor(
    @Inject(TASK_DTO_STORAGE) private _getSelectedTask: TaskDtoStoragePort,
    @Inject(REMOVES_TASK_DTO) private _removesTaskDto: RemovesTaskDtoPort,
    public modalRef?: BsModalRef
  ) {}

  onCancelButtonClicked() {
    this.modalRef?.hide();
  }

  onConfirmDeleteTaskButtonClicked(taskId: string): void {
    this._removesTaskDto.remove(taskId);
    this.modalRef?.hide();
  }
}
