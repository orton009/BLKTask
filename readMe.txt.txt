Created an app to register teams for pubg tournament 

features : 

1. team registration page to register a new team
2. By default 2 teams are already registered for demo purpose. All the data is saved locally so after closing the application data will not be retained.
3. In teams page, all of the registered teams can be viewed.
	1. select a team to view full details
	2. edit the selected the team
	3. delete the selected team

4. @Input() is used to pass team data from team-list component to team-card component
5. @output() is used to pass the info that a team is selected from team-card component -> team-list component -> teams component and depending upon whether a team is selected or not a
	text is displayed above the team list.
6. teamService is the central data provider across the whole application 
7. Routing is done for all the pages 
