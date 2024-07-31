import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { EditorComponent } from './pages/editor/editor.component';


@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    EditorComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
