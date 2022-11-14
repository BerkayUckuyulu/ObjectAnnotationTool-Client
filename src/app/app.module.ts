import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './ui/ui.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShapeService } from './services/shape.service';
import { Shape } from './shape';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UiModule,
    CommonModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ShapeService,
    { provide: "baseUrl", useValue: "https://localhost:7081/api", multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
