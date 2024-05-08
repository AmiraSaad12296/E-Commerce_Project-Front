import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { canLoginGuard } from './Guards/can-login.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './Account/login/login.component';
import { LogoutComponent } from './Account/logout/logout.component';

export const routes: Routes = [

{path:'Home',component:HomeComponent,title:"Home"},
{path:'Contact',component:ContactUsComponent,title:"Contact" , canActivate:[canLoginGuard]},
{path:'Category',component:ContactUsComponent,title:"Category"},
{path:'Login',component:LoginComponent,title:"Login"},
{path:'Logout',component:LogoutComponent,title:"Logout"},

{path:'order',loadChildren:()=>import('../app/order/order.routes').then(p=>p.routes),title:'orders'},

{path:'',redirectTo:'home',pathMatch:'full'},
{path:'**',component:NotFoundComponent}
];

