import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseTasksService } from './firebase-tasks.service';
import { GETS_ALL_FOOTER_IMAGES_DTO } from '../../../application/ports/secondary/gets-all-footer-images.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseTasksService,
    { provide: GETS_ALL_FOOTER_IMAGES_DTO, useExisting: FirebaseTasksService },
  ],
  exports: [],
})
export class FirebaseTasksServiceModule {}
