
import { Injectable } from '@angular/core';
import { filter } from 'rxjs';
import { Shape } from '../shape';
import { HttpClientService } from './http-client.service';

@Injectable()
export class ShapeService {
  constructor(private httpClientService: HttpClientService) {

  }

  private shapes: Shape[] = [];
  private picturesShape: Shape[];
  getShapes() {
    this.httpClientService.get<Shape[]>({
      controller: "shapes"
    }).subscribe(response => {
      this.shapes = response;
      console.log(response);
    })
    return this.shapes;
  }
  getShapesByPictureId(id: string) {

    this.picturesShape = this.getShapes().filter(x => x.pictureId == id);
    return this.picturesShape;
  }
}

