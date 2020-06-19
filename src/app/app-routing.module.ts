import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamRegistrationComponent } from './team-registration/team-registration.component';
import { TeamsComponent } from './teams/teams.component';
import { StarterComponent } from './teams/starter/starter.component';
import { TeamDetailComponent } from './teams/team-detail/team-detail.component';

const routes: Routes = [
  {path : "" , component : HomeComponent, pathMatch : "full"},
  {path : "register" , component : TeamRegistrationComponent},
  {path : "teams" , component : TeamsComponent, children: [
    {path : "" , component :StarterComponent} ,
    {path : ":id/edit", component : TeamRegistrationComponent, pathMatch: "full"},
    {path : ":id", component : TeamDetailComponent}
  ]}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
