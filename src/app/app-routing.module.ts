import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AuthguardService } from './auth-guards/authguard.service';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'details/:name', component: DetailsComponent},
  {path: 'createProducts', component: CreateProductComponent},
  {path: 'productDetails', component: ProductDetailsComponent,  canActivate: [AuthguardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
