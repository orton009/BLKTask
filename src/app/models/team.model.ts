import {Member} from './member.model' ;

export class Team{
    constructor(public name : string, public description : string, public hiddenTagline : string, public members : Member[]){}
    
}