import { Element } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PictureCreate } from 'src/app/models/picture/picture-create';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imagePath: string = "";
  imageFull: string = "";
  showResim: boolean = false;
  url: any;

  constructor(private router: Router, private httpClientService: HttpClientService) { }

  ngOnInit(): void {
  }


  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }

  }




  imageFullPath(image: string) {



    this.imageFull = image.substring(12);

    this.showResim = !this.showResim




    //ekleme işlemi yapılacak
    // this.imageFull = "~/assets/images/" + image.value.substring(12)







  }

  addImage(image: any) {

    this.imageFull = image.value.substring(12);
    var picture = new PictureCreate();
    picture.name = this.imageFull;
    picture.url = this.url;


    this.httpClientService.post({
      controller: "pictures"
    }, picture).subscribe();

  }


}
