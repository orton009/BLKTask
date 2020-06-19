import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Team } from 'src/app/models/team.model';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {
  @Input() team : Team
  @Input() teamId : number 
  @Output() teamSelected : EventEmitter<void> = new EventEmitter<void>()
  constructor() { }

  ngOnInit() {
  }
  onTeamSelected(){
    this.teamSelected.emit() ;
  }
}
