import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from "@angular/router";

import { LoginComponent } from "../login/login.component";
import { HomeComponent } from "../home/home.component";

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "home", component: HomeComponent}
]

@NgModule({
  exports:[RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class MyRouterModule { }
