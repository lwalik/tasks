import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllFooterImagesDtoPort } from '../../../application/ports/secondary/gets-all-footer-images.dto-port';
import { FooterImageDTO } from '../../../application/ports/secondary/footer-image.dto';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseFooterImagesService implements GetsAllFooterImagesDtoPort {
  constructor(private _client: AngularFirestore) {}

  getAll(criterion: Partial<FooterImageDTO>): Observable<FooterImageDTO[]> {
    return this._client
      .collection<FooterImageDTO>('footer-images')
      .valueChanges({ idField: 'id' })
      .pipe(
        map((data: FooterImageDTO[]) => filterByCriterion(data, criterion))
      );
  }
}
