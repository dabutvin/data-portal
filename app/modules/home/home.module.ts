import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ConstellationOverviewDirective } from '../constellation/overview/constellation-overview.directive';

import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { routing } from './home.routing';

@NgModule({
  imports: [SharedModule, routing],
  declarations: [ConstellationOverviewDirective, HomeComponent],
  providers: [HomeService]
})
export class HomeModule { }