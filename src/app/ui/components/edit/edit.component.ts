import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ShapeService } from 'src/app/services/shape.service';
import { Shape } from 'src/app/shape';
import { HttpClientService } from 'src/app/services/http-client.service';
import { TicketCreate } from 'src/app/models/ticket/ticket-create';
import { MatSelect } from '@angular/material/select';
import { FormControl, FormGroup } from '@angular/forms';

import { map } from 'rxjs/operators'


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private shapeService: ShapeService,
    private route: ActivatedRoute,
    private router: Router, private httpClientService: HttpClientService) {



  }

  title: string = 'Shape editor';
  shapes: Shape[];
  sayac: number = 0;

  picturesShape: Shape[];

  currentShape = new BehaviorSubject<Shape>(null);
  pictures: Array<any>;

  selectedPictureUrl: string = "";
  selectedPictureId: any;
  selectShow: boolean = true;

  findShape = (x) => x < 0 ? 1 : x + 1;



  foodControl = new FormControl("Resim Seçiniz");

  form = new FormGroup({
    food: this.foodControl,

  });


  ngOnInit(): void {
    // invoke the shape service







    this.httpClientService.get<any[]>({
      controller: "pictures"
    }).subscribe(response => this.pictures = response);


  }


  selectedValue2: string = "";
  selectedCar: string = "";



  onSelected(selectedValue: string) {


    this.selectedValue2 = selectedValue;
  }

  confirm() {




    this.shapes = this.shapeService.getShapesByPictureId(this.foodControl.value["id"]);




    // when current shape changes, navigate the router 
    this.currentShape.subscribe(shape =>
      this.router.navigate(['/shape', this.findShape(
        this.shapes.findIndex(sh => sh == shape))])
    );
    this.picturesShape = this.shapeService.getShapesByPictureId(this.foodControl.value["id"]);
    console.log(this.picturesShape);
    this.picturesShape.forEach(shape => {
      this.currentShape.next(shape)
    });




    this.selectedPictureUrl = this.foodControl.value["url"];
    this.selectedPictureId = this.foodControl.value["id"];
    this.selectShow != this.selectShow;

    if (this.sayac == 0) {
      this.sayac++
      this.confirm()

    }


  }
}










interface Food {
  value: string;
  viewValue: string;
}

