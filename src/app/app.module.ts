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
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
=======
import { UserComponent } from './user/user.component';
import { CouponComponent } from './coupon/coupon.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
>>>>>>> origin/dev-joyce

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'product', component: ProductComponent},
<<<<<<< HEAD
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotfoundComponent}
=======
  {path: 'user', component: UserComponent},
  {path: '**', component: NotfoundComponent},
  {path: 'coupon', component: CouponComponent},
  {path: 'cart', component: CartComponent},
  {path: 'order', component: OrderComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'login', component: LoginComponent}
>>>>>>> origin/dev-joyce
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    IndexComponent,
    FooterComponent,
    ProductComponent,
<<<<<<< HEAD
    NotfoundComponent,
    UserComponent,
    LoginComponent
=======
    UserComponent,
    CouponComponent,
    NotfoundComponent,
    CartComponent,
    OrderComponent,
    CategoryComponent,
    LoginComponent,
>>>>>>> origin/dev-joyce
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
