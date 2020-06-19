import { Team } from '../models/team.model';
import { Subject } from 'rxjs';

export class TeamService{
    teamChanged = new Subject<null>();
    teams: Team[] = [
        {
            name : "TeamIND", 
            description : "We're expert in Erangle and like to play aggresive",
            hiddenTagline : "Previous PMCO Winner",
            members: [
                {name : "scoutOP" , role : "Assaulter", primarySkill : "Scouting"},
                {name : "Daljit", role : "Scniper", primarySkill : "crouch and shoot"}
            ]
        },
        {
            name : "TeamINS",
            description : "We're expert in Miramar and like to play safe",
            hiddenTagline : "best scorer of PMCO 2019",
            members : [
                {name : "vikranta", role : "Assaulter", primarySkill: "clutch"},
                {name : "kranti" , role : "All Rounder", primarySkill : "aggresive"}
            ]
        }
    ] 
    getTeams()  :Team[]{
        return this.teams.slice() ;
    }
    getTeamById(id : number){
        if(this.teams[id]!=undefined) return this.teams[id] ;
    }
    addTeam(team: Team){
        this.teams.push(team); 
    }
    updateTeam(id:number, team:Team){
        this.teams[id] = team 
    }
    deleteTeam(id:number){
        this.teams.splice(id,1)
        this.teamChanged.next()
    }
}