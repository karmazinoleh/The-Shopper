import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {EditorComponent} from "./pages/editor/editor.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'editor', component: EditorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
