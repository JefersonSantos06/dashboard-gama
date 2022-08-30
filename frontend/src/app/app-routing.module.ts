import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {AppComponent} from "./app.component";


const routes: Routes = [
  { path: '', children: [
      { path : 'dashboard', component: DashboardComponent},
      { path: '' , redirectTo: '/dashboard', pathMatch: 'full' }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
