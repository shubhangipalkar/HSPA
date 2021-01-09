import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyPropComponent } from './buy-prop/buy-prop.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { SellPropComponent } from './sell-prop/sell-prop.component';
import { PropertyDetailComponent} from './property-detail/property-detail.component'
import { UserLoginComponent } from './User/user-login/user-login.component';
import { UserRegisterComponent } from './User/user-register/user-register.component';


const routes: Routes = [
{component: BuyPropComponent, path: 'add-prop'},
{component: PropertyListComponent, path: 'rent-prop'},
{component: PropertyDetailComponent, path: 'detailprop/:id'},
{component: UserLoginComponent, path: 'User/login'},
{component: UserRegisterComponent, path: 'User/register'},
{component: PropertyListComponent, path: '**'},
{component: PropertyListComponent, path: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
