import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';





@NgModule({
  declarations: [




  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class UiModule { }
