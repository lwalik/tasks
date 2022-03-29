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
    @Inject(REMOVES_TASK_DTO) private _removesTaskDto: RemovesTaskDtoPort
  ) {}

  onCheckboxChanged(task: Partial<TaskDTO>): void {
    this._setsTaskDto.set({
      id: task.id,
      description: task.description,
      isDone: !task.isDone,
    });
  }

  onDeleteTaskSubmited(task: Partial<TaskDTO>): void {
    this._removesTaskDto.remove(`${task.id}`);
  }
}
