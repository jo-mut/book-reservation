import { NgModule } from '@angular/core';
import { Routes, RouterModule, NavigationEnd } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

const routes: Routes = [
  {path: '', redirectTo: '/restaurant', pathMatch: 'full'},
  {path: 'restaurant', component: RestaurantComponent},
  {path: '**', component: PageNotFoundComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [PageNotFoundComponent, RestaurantComponent];
