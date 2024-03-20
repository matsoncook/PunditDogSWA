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

export var testTeamList = [{"teamID":1,"teamName":"Man City","shortName":"Man City"},{"teamID":2,"teamName":"Man United","shortName":"Man United"},{"teamID":3,"teamName":"Liverpool","shortName":"Liverpool"},{"teamID":4,"teamName":"Chelsea","shortName":"Chelsea"}];

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
}

export function convertFixtureListFromJSON(json:any):Fixture[]
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
      awayOdds: json[i].awayOdds
    };
    fixtureList.push(fixture);
  }
  return fixtureList;
}
export var testFixtureList = [{"fixtureID":2,"leagueID":1,"homeTeamID":1,"awayTeamID":2,"fixtureDate":"2023-08-08T15:00:00","homeTeamScore":0,"awayTeamScore":0,"fixtureDescription":"Man-yew","isPlayed":0,"isStarted":0,"homeOdds":0,"drawOdds":0,"awayOdds":0},{"fixtureID":3,"leagueID":1,"homeTeamID":3,"awayTeamID":4,"fixtureDate":"2023-08-08T15:00:00","homeTeamScore":0,"awayTeamScore":0,"fixtureDescription":"Liver","isPlayed":0,"isStarted":0,"homeOdds":0,"drawOdds":0,"awayOdds":0}];
export interface Prediction {
   predictionID: number;
  leagueID: number;
  userID: number;
  fixtureID: number;
  homeTeamScore: number;
  awayTeamScore: number;
  timeOfSubmission: string;
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
      timeOfSubmission: json[i].timeOfSubmission
    };
    predictionList.push(prediction);
  }
  return predictionList;
}
export var testPredictionList= [{"predictionID":1,"leagueID":0,"userID":0,"fixtureID":1,"homeTeamScore":0,"awayTeamScore":0,"timeOfSubmission":null},{"predictionID":2,"leagueID":0,"userID":0,"fixtureID":1,"homeTeamScore":0,"awayTeamScore":0,"timeOfSubmission":null},{"predictionID":3,"leagueID":0,"userID":0,"fixtureID":1,"homeTeamScore":0,"awayTeamScore":0,"timeOfSubmission":null},{"predictionID":4,"leagueID":0,"userID":0,"fixtureID":1,"homeTeamScore":0,"awayTeamScore":0,"timeOfSubmission":null},{"predictionID":5,"leagueID":0,"userID":0,"fixtureID":1,"homeTeamScore":0,"awayTeamScore":0,"timeOfSubmission":null},{"predictionID":6,"leagueID":0,"userID":0,"fixtureID":1,"homeTeamScore":0,"awayTeamScore":0,"timeOfSubmission":null},{"predictionID":7,"leagueID":0,"userID":0,"fixtureID":1,"homeTeamScore":0,"awayTeamScore":0,"timeOfSubmission":null},{"predictionID":8,"leagueID":0,"userID":0,"fixtureID":1,"homeTeamScore":0,"awayTeamScore":0,"timeOfSubmission":null},{"predictionID":9,"leagueID":0,"userID":0,"fixtureID":1,"homeTeamScore":0,"awayTeamScore":0,"timeOfSubmission":null},{"predictionID":10,"leagueID":0,"userID":0,"fixtureID":1,"homeTeamScore":0,"awayTeamScore":0,"timeOfSubmission":null},{"predictionID":11,"leagueID":0,"userID":0,"fixtureID":1,"homeTeamScore":0,"awayTeamScore":0,"timeOfSubmission":null},{"predictionID":12,"leagueID":0,"userID":0,"fixtureID":1,"homeTeamScore":0,"awayTeamScore":0,"timeOfSubmission":null},{"predictionID":13,"leagueID":0,"userID":0,"fixtureID":1,"homeTeamScore":0,"awayTeamScore":0,"timeOfSubmission":null},{"predictionID":14,"leagueID":0,"userID":0,"fixtureID":1,"homeTeamScore":0,"awayTeamScore":0,"timeOfSubmission":null},{"predictionID":15,"leagueID":0,"userID":0,"fixtureID":1,"homeTeamScore":0,"awayTeamScore":0,"timeOfSubmission":null},{"predictionID":16,"leagueID":0,"userID":0,"fixtureID":1,"homeTeamScore":0,"awayTeamScore":0,"timeOfSubmission":null},{"predictionID":17,"leagueID":0,"userID":0,"fixtureID":1,"homeTeamScore":0,"awayTeamScore":0,"timeOfSubmission":null}];
