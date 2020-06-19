import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Team } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  @Output() someTeamSelected = new EventEmitter<void>()
  teams : Team[]
  teamSubscription : Subscription
  constructor(private _teamService : TeamService) { }

  ngOnInit() {
    this.teamSubscription = this._teamService.teamChanged.subscribe(()=>{
      this.teams = this._teamService.getTeams()
    })
    this.teams = this._teamService.getTeams() 
  }
  onTeamSelected(){
    this.someTeamSelected.emit()
  }
}
