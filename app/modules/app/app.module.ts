import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

/* App Root */
import { AppComponent }   from './app.component';

/* Feature Modules */
import { ConstellationModule }  from '../constellation/constellation.module';
import { routing }        from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ConstellationModule,
    routing
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }