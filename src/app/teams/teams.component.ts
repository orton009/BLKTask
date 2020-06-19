import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teamSelected = false
  constructor() { }

  ngOnInit() {
  }
  onTeamSelected(){
    this.teamSelected=true
  }
}
