import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http" ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { TeamRegistrationComponent } from './team-registration/team-registration.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamListComponent } from './teams/team-list/team-list.component';
import { TeamDetailComponent } from './teams/team-detail/team-detail.component';
import { TeamCardComponent } from './teams/team-card/team-card.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { TeamService } from './services/team.service';
import { StarterComponent } from './teams/starter/starter.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    TeamRegistrationComponent,
    TeamsComponent,
    TeamListComponent,
    TeamDetailComponent,
    TeamCardComponent,
    HomeComponent,
    StarterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
