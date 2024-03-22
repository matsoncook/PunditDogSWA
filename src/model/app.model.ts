export interface Team
{
  teamID:number;
  teamName:string;
  shortName:string;
}

export function convertTeamListFromJSON(json:any):Team[]
{
  let teamList:Team[] = [];
  for(let i = 0; i < json.length; i++)
  {
    let team:Team = {
      teamID: json[i].teamID,
      teamName: json[i].teamName,
      shortName: json[i].shortName
    };
    teamList.push(team);
  }
  return teamList;
}



export interface Fixture {
  fixtureID: number;
  leagueID: number;
  homeTeamID: number;
  awayTeamID: number;
  fixtureDate: string;
  homeTeamScore: number;
  awayTeamScore: number;
  fixtureDescription: string;
  isPlayed: number;
  isStarted: number;
  homeOdds: number;
  drawOdds: number;
  awayOdds: number;
  description: string;
  shortDescription: string;
}

export function convertFixtureListFromJSON(json:any,teamList : Array<Team>):Fixture[]
{
  let fixtureList:Fixture[] = [];
  for(let i = 0; i < json.length; i++)
  {
    let fixture:Fixture = {
      fixtureID: json[i].fixtureID,
      leagueID: json[i].leagueID,
      homeTeamID: json[i].homeTeamID,
      awayTeamID: json[i].awayTeamID,
      fixtureDate: json[i].fixtureDate,
      homeTeamScore: json[i].homeTeamScore,
      awayTeamScore: json[i].awayTeamScore,
      fixtureDescription: json[i].fixtureDescription,
      isPlayed: json[i].isPlayed,
      isStarted: json[i].isStarted,
      homeOdds: json[i].homeOdds,
      drawOdds: json[i].drawOdds,
      awayOdds: json[i].awayOdds,
      description: "HID: " + json[i].homeTeamID + " AID: " + json[i].awayTeamID,
      shortDescription: "HID: " + json[i].homeTeamID + " AID: " + json[i].awayTeamID
    };
      
    
    createFixtureDescription(fixture,teamList);
  
    fixtureList.push(fixture);
  }
return fixtureList;
  
}
export function createFixtureDescription(fixture:Fixture,teamList : Array<Team>):void
{
  let homeTeam:Team  = findTeamById(teamList,fixture.homeTeamID) ;
  let awayTeam:Team  = findTeamById(teamList,fixture.awayTeamID) ;
  // let awayTeam:Team | null = teamList.find(x => x.teamID == fixture.awayTeamID);
  fixture.description = homeTeam.shortName + " vs " + awayTeam.shortName + " at " + 
  fixture.fixtureDescription + " on " + fixture.fixtureDate;// + awayTeam.shortName;
  fixture.shortDescription = homeTeam.shortName + " vs " + awayTeam.shortName;
}

function findTeamById(teamList:Team[],teamID:number):Team 
{
  for(var team  of teamList)
    {
      if(team.teamID == teamID)
      {
        return team;
      }
    }
  var u : Team = {teamID:0,teamName:"Unknown team",shortName:"Unknown team"};
  return u;
  
}

export interface Prediction {
   predictionID: number;
  leagueID: number;
  userID: number;
  fixtureID: number;
  homeTeamScore: number;
  awayTeamScore: number;
  timeOfSubmission: string;
  description: string;
  shortDescription: string;
}

export function convertPredictionListFromJSON(json:any):Prediction[]
{
  let predictionList:Prediction[] = [];
  for(let i = 0; i < json.length; i++)
  {
    let prediction:Prediction = {
      predictionID: json[i].predictionID,
      leagueID: json[i].leagueID,
      userID: json[i].userID,
      fixtureID: json[i].fixtureID,
      homeTeamScore: json[i].homeTeamScore,
      awayTeamScore: json[i].awayTeamScore,
      timeOfSubmission: json[i].timeOfSubmission,
      description: "",
      shortDescription:""
      
    };
    predictionList.push(prediction);
  }
  return predictionList;
}

export var emptyFixture : Fixture = {
  fixtureID: 0,
  leagueID: 0,
  homeTeamID: 0,
  awayTeamID: 0,
  fixtureDate: "",
  homeTeamScore: 0,
  awayTeamScore: 0,
  fixtureDescription: "",
  isPlayed: 0,
  isStarted: 0,
  homeOdds: 0,
  drawOdds: 0,
  awayOdds: 0,
  description: "",
  shortDescription: ""
}
export var emptyTeam : Team = {
  teamID: 0,
  teamName: "Unknown Team",
  shortName: "Unknown"
}

