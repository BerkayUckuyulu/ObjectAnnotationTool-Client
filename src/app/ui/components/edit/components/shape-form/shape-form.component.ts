import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AssignmentComponent } from './dialogs/assignment/assignment.component';
import { Shape } from 'src/app/shape';
import { ShapeService } from 'src/app/services/shape.service';



@Component({
  selector: 'app-shape-form',
  templateUrl: './shape-form.component.html',
  styleUrls: ['./shape-form.component.css']
})
export class ShapeFormComponent implements OnInit {
  constructor(public dialog: MatDialog, private shapeService: ShapeService) { }
  @Input() shapesToEdit: Shape[];
  @Input() editedShape: Subject<Shape>;



  // a local reference to the currentShape, useful for [(ngModel)]
  localCurrent: Shape;



  // subscribe the local currentShape to the global Subject
  ngOnInit() {
    // this.shapesToEdit = this.shapeService.getShapesByPictureId(this.selectedPictureId);



    this.editedShape.subscribe(x => this.localCurrent = x);
  }
  // when the shape changes, make the current shape subject emit
  shapeChanged(e: Event) {
    this.editedShape.next(this.localCurrent);
  }

  double(shape: Shape) {
    this.dialog.open(AssignmentComponent, {
      height: "45vh",
      width: "40%",
      data: shape,
    });

  }
}