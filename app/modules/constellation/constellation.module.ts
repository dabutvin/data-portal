import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ConstellationOverviewDirective } from './overview/constellation-overview.directive';

import { ConstellationComponent } from './constellation.component';
import { ConstellationService } from './constellation.service';
import { routing } from './constellation.routing';

@NgModule({
  imports: [SharedModule, routing],
  declarations: [ConstellationOverviewDirective, ConstellationComponent],
  providers: [ConstellationService]
})
export class ConstellationModule { }