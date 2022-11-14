import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientService } from 'src/app/services/http-client.service';
import { Shape } from 'src/app/shape';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  name = 'Object Annotation Tool';
  fileUrl;
  shapesResponse: Shape[];
  textContent: string = "";


  constructor(private sanitizer: DomSanitizer, private httpClientService: HttpClientService) { }
  ngOnInit() {
    this.httpClientService.get<Shape[]>({ controller: "shapes" }).subscribe(response => {

      this.shapesResponse = response; console.log(this.shapesResponse)

      this.shapesResponse.forEach(shape => {

        this.textContent = this.textContent + JSON.stringify(shape) + "\n"

      });


      const data = this.textContent;

      const blob = new Blob([data], { type: 'application/octet-stream' });
      this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));


    });

  }

}
