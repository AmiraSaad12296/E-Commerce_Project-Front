import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { canLoginGuard } from './Guards/can-login.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './Account/login/login.component';
import { LogoutComponent } from './Account/logout/logout.component';
<<<<<<< HEAD
import { RegisterComponent } from './register/register.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
=======
import { ProductComponent } from './Product/product/product.component';
import { ProductDetialsComponent } from './Product/product-detials/product-detials.component';
>>>>>>> b61b8b7b10396062a3abd1def7ae76388eb858bf

export const routes: Routes = [

{path:'Home',component:HomeComponent,title:"Home"},
<<<<<<< HEAD
{path:'Contact',component:ContactUsComponent,title:"Contact", canActivate:[canLoginGuard]},
{path:'Category',component:CatagoryComponent,title:"Category"},
{path:'SubCategory',component:SubCategoryComponent,title:"SubCategory"},
{path:'Register',component:RegisterComponent,title:"Register"},
{path:'Login',component:LoginComponent,title:"Login"},
{path:'Logout',component:LogoutComponent,title:"Logout"},
=======
{path:'Contact',component:ContactUsComponent,title:"Contact" , canActivate:[canLoginGuard]},
{path:'Category',component:ContactUsComponent,title:"Category"},
{path:'Login',component:LoginComponent,title:"Login"},
{path:'Logout',component:LogoutComponent,title:"Logout"},
{path:'Products',component:ProductComponent,title:"Products"},
{ path: 'Products/details/:id', component: ProductDetialsComponent,title: "ProductDetials"} ,
>>>>>>> b61b8b7b10396062a3abd1def7ae76388eb858bf
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'**',component:NotFoundComponent},


];
