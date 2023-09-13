import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment.development';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UnAuthorizedComponent } from './components/un-authorized/un-authorized.component';
import { MyDashboardComponent } from './components/my-dashboard/my-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin.module';
import { AuthGuard } from './guards/auth.guard';
import { OrderService } from './services/order.service';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { AdminGuard } from './guards/admin.guard';
import { WishlistService } from './services/wishlist.service';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'check-out', component: CheckOutComponent },
  { path: 'order-detail/:id', component: OrderDetailComponent, canActivate: [AuthGuard] },
  { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard] },
  { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
  { path: 'my-dashboard', component: MyDashboardComponent, canActivate: [AuthGuard] },
  { path: 'my-wishlist', component: WishlistComponent, canActivate: [AuthGuard] },
  { path: 'un-authorized', component: UnAuthorizedComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    OrderDetailComponent,
    NotFoundComponent,
    UnAuthorizedComponent,
    MyDashboardComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
    NgxPaginationModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot(routes),
    AdminModule
  ],
  providers: [
    AuthService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService,
    WishlistService,
    AuthGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
