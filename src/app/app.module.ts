import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { CouponComponent } from './coupon/coupon.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { CategoryComponent } from './category/category.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ContactComponent } from './contact/contact.component'; 
import { AboutComponent } from './about/about.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { AnadirComponent } from './anadir/anadir.component';
import { EnviopagoComponent } from './enviopago/enviopago.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product/:id', component: ProductdetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: UserComponent},
  {path: 'user/:id', component: UserdetailsComponent},
  {path: 'coupon', component: CouponComponent},
  {path: 'cart', component: CartComponent},
  {path: 'order', component: OrderComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'anadir', component: AnadirComponent},
  {path: 'enviopago', component: EnviopagoComponent},
  {path: '**', component: NotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    IndexComponent,
    LoginComponent,
    FooterComponent,
    ProductComponent,
    NotfoundComponent,
    UserComponent,
    LoginComponent,
    CouponComponent,
    CartComponent,
    OrderComponent,
    CategoryComponent,
    ProductdetailsComponent,
    AboutComponent,
    ContactComponent,
    UserdetailsComponent,
    AnadirComponent

  ],
  imports: [
    RouterModule,
    FormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
