import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  ADDS_TASK_DTO,
  AddsTaskDtoPort,
} from '../../../application/ports/secondary/adds-task.dto-port';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-create-task-form',
  templateUrl: './create-task-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTaskFormComponent {
  readonly createTask: FormGroup = new FormGroup({
    description: new FormControl('', Validators.required),
    isDone: new FormControl(),
  });

  constructor(
    @Inject(ADDS_TASK_DTO) private _addsTaskDto: AddsTaskDtoPort,
    private router: Router
  ) {}

  onCreateTaskSubmitted(createTask: FormGroup): void {
    if (createTask.invalid) {
      return;
    }
    this._addsTaskDto.add({
      description: createTask.get('description')?.value,
      isDone: false,
    });
    this.createTask.reset();
    this.router.navigate(['/tasksList']);
  }
}
