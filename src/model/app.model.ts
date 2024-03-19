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

