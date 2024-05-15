import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { canLoginGuard } from './Guards/can-login.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './Account/login/login.component';
import { LogoutComponent } from './Account/logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { ProductComponent } from './Product/product/product.component';
import { ProductDetialsComponent } from './Product/product-detials/product-detials.component';
import { CartListComponent } from './Cart/cart-list/cart-list.component';
import { SubCategoryProductComponent } from './sub-category-product/sub-category-product.component';
import { WishListComponent } from './WishList/wish-list/wish-list.component';

export const routes: Routes = [

{path:'home',component:HomeComponent,title:"Home"},
{path:'Contact',component:ContactUsComponent,title:"Contact", canActivate:[canLoginGuard]},
{path:'Category',component:CatagoryComponent,title:"Category"},
{path:'SubCategory',component:SubCategoryComponent,title:"SubCategory"},
{path:'SubCategory/:subCatId', component: SubCategoryProductComponent,title:"SubProduct"},
{path:'Cart',component:CartListComponent,title:"Cart"},
{path:'Wish',component:WishListComponent,title:"WishList"},
{path:'Register',component:RegisterComponent,title:"Register"},
{path:'Login',component:LoginComponent,title:"Login"},
{path:'Logout',component:LogoutComponent,title:"Logout"},
{path:'order',loadChildren:()=>import('../app/order/order.routes').then(p=>p.routes),title:'orders'},
{path:'Products',component:ProductComponent,title:"Products"},
{path: 'Products/details/:id', component: ProductDetialsComponent,title: "ProductDetials"} ,
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'**',component:NotFoundComponent}
];

