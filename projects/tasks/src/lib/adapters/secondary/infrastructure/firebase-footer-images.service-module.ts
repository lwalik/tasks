import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseFooterImagesService } from './firebase-footer-images.service';
import { GETS_ALL_FOOTER_IMAGES_DTO } from '../../../application/ports/secondary/gets-all-footer-images.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseFooterImagesService,
    {
      provide: GETS_ALL_FOOTER_IMAGES_DTO,
      useExisting: FirebaseFooterImagesService,
    },
  ],
  exports: [],
})
export class FirebaseFooterImagesServiceModule {}
