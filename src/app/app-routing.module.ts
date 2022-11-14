import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "edit", loadChildren: () => import("./ui/components/edit/edit.module").then(module => module.EditModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
