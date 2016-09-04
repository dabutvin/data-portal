import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';

import { HomeComponent }   from './home.component';
import { HomeService }     from './home.service';
import { routing }            from './home.routing';

@NgModule({
  imports:      [ SharedModule, routing ],
  declarations: [ HomeComponent ],
  providers:    [ HomeService ]
})
export class HomeModule { }