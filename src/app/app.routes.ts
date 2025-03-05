import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import necessary components

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Define default route
  { path: 'home', component: HomeComponent } // Add more routes as needed
];
