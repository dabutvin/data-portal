import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'homes', pathMatch: 'full'},
  { path: 'homes', loadChildren: 'modules/app/home/home.module#HomeModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });