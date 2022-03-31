import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { DateService } from './date.service';
import { GETS_ALL_DATE_DTO } from '../../../application/ports/secondary/gets-all-date.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    DateService,
    { provide: GETS_ALL_DATE_DTO, useExisting: DateService },
  ],
  exports: [],
})
export class DateServiceModule {}
