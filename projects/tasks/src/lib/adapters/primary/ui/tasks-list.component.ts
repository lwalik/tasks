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
    @Inject(SETS_TASK_DTO) private _setsTaskDto: SetsTaskDtoPort
  ) {}

  onCheckboxChangeed(task: Partial<TaskDTO>): void {
    console.log(task);
    if (task.done) {
      this._setsTaskDto.set({
        id: task.id,
        description: task.description,
        done: false,
      });
    } else {
      this._setsTaskDto.set({
        id: task.id,
        description: task.description,
        done: true,
      });
    }
  }
}
