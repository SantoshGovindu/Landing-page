import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from '../components/contact/contact.component';
import { FeaturesComponent } from '../components/features/features.component'
import { PricingComponent } from  '../components/pricing/pricing.component'
import { ProductComponent } from  '../components/product/product.component'

const routes: Routes = [
  {
    path: 'productDetail',
    component: ProductComponent
  },
  {
    path: 'productPrice',
    component: PricingComponent,
  },
  {
    path: 'productFeature',
    component: FeaturesComponent
  },
  {
    path: 'contactus',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
