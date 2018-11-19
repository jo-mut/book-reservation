import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule,
  MatInputModule, MatRadioModule, MatSelectModule, MatMenuModule,
  MatSidenavModule, MatToolbarModule, MatCardModule, MatDividerModule,
  MatExpansionModule, MatGridListModule, MatListModule, MatStepperModule,
  MatTabsModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule,
  MatProgressBarModule, MatDialogModule, MatSnackBarModule, MatTooltipModule,
  MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ServicesComponent } from './services/services.component';
import { ChefsComponent } from './chefs/chefs.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { LandingComponent } from './landing/landing.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavBarComponent,
    ServicesComponent,
    ChefsComponent,
    ReviewsComponent,
    FooterComponent,
    RestaurantComponent,
    LandingComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule,
    MatInputModule, MatRadioModule, MatSelectModule, MatMenuModule,
    MatSidenavModule, MatToolbarModule, MatCardModule, MatDividerModule,
    MatExpansionModule, MatGridListModule, MatListModule, MatStepperModule,
    MatTabsModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule,
    MatProgressBarModule, MatDialogModule, MatSnackBarModule, MatTooltipModule,
    MatPaginatorModule, MatSortModule, MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
