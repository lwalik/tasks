import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { FooterImageDTO } from '../../../application/ports/secondary/footer-image.dto';
import {
  GETS_ALL_FOOTER_IMAGES_DTO,
  GetsAllFooterImagesDtoPort,
} from '../../../application/ports/secondary/gets-all-footer-images.dto-port';

@Component({
  selector: 'lib-footer',
  templateUrl: './footer.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  footerImages$: Observable<FooterImageDTO[]> =
    this._getsAllFooterImagesDto.getAll();

  constructor(
    @Inject(GETS_ALL_FOOTER_IMAGES_DTO)
    private _getsAllFooterImagesDto: GetsAllFooterImagesDtoPort
  ) {}
}
