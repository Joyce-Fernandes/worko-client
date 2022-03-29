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

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'product', component: ProductComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    IndexComponent,
    FooterComponent,
    ProductComponent,
    NotfoundComponent,
    UserComponent,
    LoginComponent
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
