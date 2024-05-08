import { Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { OrderAddComponent } from './order-add/order-add.component';

// order/...
export const routes: Routes = [
    {path:'',component:OrderListComponent},
    {path:'details/:id', component:OrderDetailsComponent},
    {path:'edit/:id',component:OrderEditComponent},
    {path:'add',component:OrderAddComponent},

];
