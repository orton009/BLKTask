import { Component, OnInit, Output } from '@angular/core';
import { Team } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  team: Team
  teamId : number
  teamSubscription : Subscription
  constructor(private _teamService : TeamService, private route : ActivatedRoute, private router : Router ) { }

  ngOnInit() {
    this.team = undefined
    this.route.params.subscribe((param)=>{
      this.teamId = +param.id 
      this.team = this._teamService.getTeamById(this.teamId)
    })
  }
  onTeamEdit(){
    this.router.navigate(['edit'] , {relativeTo : this.route});
  }
  onTeamDelete(){
    this._teamService.deleteTeam(this.teamId)
    this.router.navigate(["/teams"])
  }
}
