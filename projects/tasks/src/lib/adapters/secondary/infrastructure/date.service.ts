import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GetsAllDateDtoPort } from '../../../application/ports/secondary/gets-all-date.dto-port';
import { DateDTO } from '../../../application/ports/secondary/date.dto';

@Injectable()
export class DateService implements GetsAllDateDtoPort {
  getAll(): Observable<DateDTO> {
    return of({
      currentDate: new Date(),
    });
  }
}
