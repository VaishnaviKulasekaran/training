import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { TemplateFormComponent } from './template-form/template-form.component'; 
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {
    component:EventComponent,
    path:'event'
  },
  {
    component:TemplateFormComponent,
    path:'templateForm'
  },
  {
    component:ReactiveFormComponent,
    path:'reactiveForm'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
