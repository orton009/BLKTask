import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Team } from '../models/team.model';
import { Member } from '../models/member.model';
import { NgForm } from '@angular/forms';
import { TeamService } from '../services/team.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-team-registration',
  templateUrl: './team-registration.component.html',
  styleUrls: ['./team-registration.component.css']
})
export class TeamRegistrationComponent implements OnInit, OnDestroy {
  editMode : boolean
  team : Team
  members :Member[]
  teamId : number
  TeamSubscription : Subscription
  constructor(private _teamService : TeamService, private route : ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.members = new Array<Member>()
    console.log("initialized")
    this.team = new Team('','','',this.members)
    this.editMode = false 
    this.TeamSubscription = this.route.params.subscribe((param)=>{
      if(param["id"]){
        this.teamId = +param["id"];
        this.editMode = true ;
        this.team = this._teamService.getTeamById(this.teamId);
        this.members = this.team.members
      }
    })
  }
  onRegister(form : NgForm){
    this.team = new Team(form.value.teamName, form.value.teamDesc, form.value.tagline, this.members)
    if(this.editMode){
      //update team
      this._teamService.updateTeam(this.teamId,this.team)
    }
    else{
      //add new team
      this._teamService.addTeam(this.team)
    }
    this.router.navigate(["/teams"])
  }
  onDeleteMember(index : number){
    this.members.splice(index,1) 
  }
  onAddMember(){
    this.members.push(new Member('', '', ''))
  }
  ngOnDestroy(){
    this.TeamSubscription.unsubscribe()
  }
}
