import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'order',loadChildren:()=>import('../app/order/order.routes').then(p=>p.routes),title:'orders'},
    
];
