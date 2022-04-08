import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAppComponent } from './my-app/my-app.component';

const routes: Routes = [
  {path: "", component: MyAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
