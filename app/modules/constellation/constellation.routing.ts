import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConstellationComponent } from './constellation.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: '', redirectTo: 'constellations', pathMatch: 'full'},
  { path: 'constellations', component: ConstellationComponent}
]);