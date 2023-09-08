import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminCategoriesComponent } from "./components/admin-categories/admin-categories.component";
import { AdminProductsComponent } from "./components/admin-products/admin-products.component";
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminOrdersComponent } from "./components/admin-orders/admin-orders.component";
import { AuthGuard } from "./guards/auth.guard";
import { AdminGuard } from "./guards/admin.guard";
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import { PieChartComponent } from "./components/charts/pie-chart/pie-chart.component";
import { DonutChartComponent } from "./components/charts/donut-chart/donut-chart.component";
import { BarChartComponent } from "./components/charts/bar-chart/bar-chart.component";

const routes: Routes = [
    { path: 'admin/categories', component: AdminCategoriesComponent, canActivate: [AuthGuard, AdminGuard] },
    { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuard, AdminGuard] },
    { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard, AdminGuard] },
    { path: 'admin/dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard, AdminGuard] }
];

@NgModule({
    declarations: [
        AdminCategoriesComponent,
        AdminProductsComponent,
        AdminOrdersComponent,
        AdminDashboardComponent,
        BarChartComponent,
        DonutChartComponent,
        PieChartComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        NgxPaginationModule
    ],
    exports: [
        BarChartComponent,
        DonutChartComponent,
        PieChartComponent
    ],
    providers: []
})

export class AdminModule { }