import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import {
  GETS_ALL_TASK_DTO,
  GetsAllTaskDtoPort,
} from '../../../application/ports/secondary/gets-all-task.dto-port';
import {
  SETS_TASK_DTO,
  SetsTaskDtoPort,
} from '../../../application/ports/secondary/sets-task.dto-port';
import {
  REMOVES_TASK_DTO,
  RemovesTaskDtoPort,
} from '../../../application/ports/secondary/removes-task.dto-port';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {
  TASK_DTO_STORAGE,
  TaskDtoStoragePort,
} from '../../../application/ports/secondary/task-dto.storage-port';
import { ConfirmDeleteModalComponent } from './confirm-delete-modal.component';

@Component({
  selector: 'lib-tasks-list',
  templateUrl: './tasks-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListComponent {
  tasks$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll();

  constructor(
    @Inject(GETS_ALL_TASK_DTO) private _getsAllTaskDto: GetsAllTaskDtoPort,
    @Inject(SETS_TASK_DTO) private _setsTaskDto: SetsTaskDtoPort,
    @Inject(REMOVES_TASK_DTO) private _removesTaskDto: RemovesTaskDtoPort,
    private modalService: BsModalService,
    @Inject(TASK_DTO_STORAGE) private _taskDtoStorage: TaskDtoStoragePort
  ) {}

  modalRef?: BsModalRef;

  onCheckboxChanged(task: Partial<TaskDTO>): void {
    this._setsTaskDto.set({
      id: task.id,
      description: task.description,
      isDone: !task.isDone,
    });
  }

  onDeleteTaskButtonClicked(task: TaskDTO): void {
    this._taskDtoStorage.next(task);
    this.modalRef = this.modalService.show(ConfirmDeleteModalComponent);
  }
}
