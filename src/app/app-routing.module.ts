import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InsertdataComponent}from './insert/insert.component';
import {UpdateComponent}from './update/update.component';
import {DeleteComponent}from './delete/delete.component';
import {ViewdataComponent}from './view/view.component';
import {NavigationComponent } from './navigation/navigation.component';




const routes: Routes = [
  { path:'', redirectTo:'navigation', pathMatch: 'full'},
  {path:'Insert', component:InsertdataComponent},
  {path:'Update', component:UpdateComponent},
  {path:'Delete', component:DeleteComponent},
  {path:'View', component:ViewdataComponent},
  {path:'navigation', component:NavigationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }