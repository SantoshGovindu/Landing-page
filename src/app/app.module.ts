import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './routes/app-routing.module';
import {AppComponent} from './app.component';
import { ProductComponent } from './components/product/product.component';
import { FeaturesComponent } from './components/features/features.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ContactComponent } from './components/contact/contact.component';

const nonProductionProviders = [{
  provide: HTTP_INTERCEPTORS,
  multi: true
}];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    FeaturesComponent,
    PricingComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
