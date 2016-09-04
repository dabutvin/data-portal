import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

/* App Root */
import { AppComponent }   from './app.component';

/* Feature Modules */
import { HomeModule }  from '../home/home.module';
import { routing }        from './app.routing';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from '../../services/in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }