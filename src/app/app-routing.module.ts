
import { NftComponent } from './trustyx/nft/nft.component';
import { NavBarComponent } from './trustyx/nav-bar/nav-bar.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './trustyx/main/main.component';
import { ProductListComponent } from './trustyx/product-list/product-list.component';
import { PopupComponent } from './trustyx/popup/popup.component';

const routes: Routes = [
  {path:'main',component:MainComponent},
  {path:'nav',component:NavBarComponent},
  {path:'nft',component:NftComponent},
  {path:'product',component:ProductListComponent},
  {path:'popup',component:PopupComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
