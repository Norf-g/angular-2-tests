import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './common/in-memory-data.service';


import { AppComponent }  from './app.component/app.component';
import { HeroDetailComponent } from './hero-detail.component/hero-detail.component';
import { HeroesComponent } from './heroes.component/heroes.component';
import { DashboardComponent } from './dashboard.component/dashboard.component';
import { HeroService } from './common/services/hero.service';
import { AppRoutingModule }     from './routes.module/app-routing.module';
import { HeroSearchComponent } from './hero-search.component/hero-search.component'
import './common/rxjs-extensions';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService), AppRoutingModule],
  declarations: [ AppComponent, HeroesComponent, HeroDetailComponent, DashboardComponent, HeroSearchComponent],
  providers: [ HeroService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
