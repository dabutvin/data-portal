import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'contact', pathMatch: 'full'},
  { path: 'homes', loadChildren: 'app/home/home.module#HomeModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);