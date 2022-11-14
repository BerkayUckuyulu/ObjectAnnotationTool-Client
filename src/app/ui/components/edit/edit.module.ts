import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ShapeTypeComponent } from './components/shape-type/shape-type.component';
import { ShapeFormComponent } from './components/shape-form/shape-form.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { Shape } from 'src/app/shape';
import { MatDialogModule } from '@angular/material/dialog';
import { AssignmentComponent } from './components/shape-form/dialogs/assignment/assignment.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { DownloadComponent } from './components/download/download.component';









@NgModule({
  declarations: [
    EditComponent,
    ShapeTypeComponent,
    ShapeFormComponent,
    CanvasComponent,
    AssignmentComponent,
    DownloadComponent,

  ],
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDividerModule,


    RouterModule.forChild([
      {
        path: '', component: EditComponent
      }
    ])
  ]
})
export class EditModule { }
