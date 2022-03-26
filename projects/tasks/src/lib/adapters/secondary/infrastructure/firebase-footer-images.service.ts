import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllFooterImagesDtoPort } from '../../../application/ports/secondary/gets-all-footer-images.dto-port';
import { FooterImagesDTO } from '../../../application/ports/secondary/footer-images.dto';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseFooterImagesService implements GetsAllFooterImagesDtoPort {
  constructor(private _client: AngularFirestore) {}

  getAll(criterion: Partial<FooterImagesDTO>): Observable<FooterImagesDTO[]> {
    return this._client
      .collection<FooterImagesDTO>('footer-images')
      .valueChanges({ idField: 'id' })
      .pipe(
        map((data: FooterImagesDTO[]) => filterByCriterion(data, criterion))
      );
  }
}
