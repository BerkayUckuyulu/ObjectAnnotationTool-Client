import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClientService } from 'src/app/services/http-client.service';
import { ShapeService } from 'src/app/services/shape.service';
import { Shape } from 'src/app/shape';


@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  constructor(private httpClientService: HttpClientService, private shapeService: ShapeService) { }
  @Input() shapesToDraw: Shape[];
  shapeType = 'rectangle';
  debugger;
  setType(type: string) {

    this.shapeType = type;
    console.log(type);

  }

  @Input() currentShape: Subject<Shape>;
  @Input() selectedPicUrl: any;
  @Input() selectedPictureId: any;

  ngOnInit() {

    this.shapesToDraw = this.shapeService.getShapesByPictureId(this.selectedPictureId);
    console.log(this.shapesToDraw)

  }

  // the shape being just drawn
  createdShape: Shape;

  startDrawing(evt: MouseEvent) {
    this.createdShape = {
      pictureId: this.selectedPictureId,

      type: this.shapeType,
      x: evt.offsetX,
      y: evt.offsetY,
      w: 0,
      h: 0
    };
    this.shapesToDraw.push(this.createdShape);
  }
  keepDrawing(evt: MouseEvent) {
    if (this.createdShape) {
      this.currentShape.next(this.createdShape);
      this.createdShape.w = evt.offsetX - this.createdShape.x;
      this.createdShape.h = evt.offsetY - this.createdShape.y;

    }
  }
  stopDrawing() {
    this.httpClientService.post({
      controller: "shapes"

    }, this.createdShape).subscribe();
    this.createdShape = null;

  }

}