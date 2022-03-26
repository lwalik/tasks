import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { FooterImagesDTO } from './footer-images.dto';

export const GETS_ALL_FOOTER_IMAGES_DTO =
  new InjectionToken<GetsAllFooterImagesDtoPort>('GETS_ALL_FOOTER_IMAGES_DTO');

export interface GetsAllFooterImagesDtoPort {
  getAll(criterion?: Partial<FooterImagesDTO>): Observable<FooterImagesDTO[]>;
}
