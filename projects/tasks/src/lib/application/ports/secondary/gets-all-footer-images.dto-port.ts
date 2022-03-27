import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { FooterImageDTO } from './footer-image.dto';

export const GETS_ALL_FOOTER_IMAGES_DTO =
  new InjectionToken<GetsAllFooterImagesDtoPort>('GETS_ALL_FOOTER_IMAGES_DTO');

export interface GetsAllFooterImagesDtoPort {
  getAll(criterion?: Partial<FooterImageDTO>): Observable<FooterImageDTO[]>;
}
