import { Component } from '@angular/core';
import { CommonModule,} from '@angular/common';
import { RouterOutlet } from '@angular/router';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule} from '@angular/material/list';
import {Team,convertTeamListFromJSON,
        Fixture,convertFixtureListFromJSON,
        Prediction,convertPredictionListFromJSON, emptyFixture,}  from '../model/app.model';
import {testTeamList,testFixtureList,testPredictionList} from '../model/testdata';
import {WebserviceDisplayComponent} from './webservice-display/webservice-display.component';


import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, MatInputModule, MatFormFieldModule,
            
    //BrowserAnimationsModule,
            FormsModule,MatButtonModule,MatIconModule,HttpClientModule,
            MatProgressSpinnerModule,MatTabsModule,MatListModule,
            MatSelectModule,MatAutocompleteModule,MatCardModule,WebserviceDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLoading= false;
  title = 'PunditDogSWA';
  webAddress = "https://punditdogfws.azurewebsites.net/api/";
  apiCode = "";
  //webCall = this.webAddress + "?code=" + this.apiCode;
  webCall = "";
  webServiceResponse = "";

  responseShortText = "";

  doneCorrect = false;
  doneError = false;

  //######################################################################

  selectedOption: Fixture = emptyFixture;
 

  onOptionSelected(value: Fixture) {
    console.log('Selected:', value);
    //this.selectedOption = value;
  }
  displayFn(fixture: Fixture): string {
    return fixture && fixture.description ? fixture.description : '';
  }

  homeTeamScore = 0;
  awayTeamScore = 0;
  //######################################################################
  
  teamList : Array<Team> = [];
  fixtureList : Array<Fixture> = [];
  predictionList : Array<Prediction> = [];
  constructor(private http: HttpClient) 
  {
    this.compileWebCall();
    this.teamList = convertTeamListFromJSON(testTeamList)
    this.fixtureList = convertFixtureListFromJSON(testFixtureList,this.teamList)
    this.predictionList = convertPredictionListFromJSON(testPredictionList,this.fixtureList)
  }

  onSubmit() {
    console.log('Form submitted');
    this. webseviceSubmit();
    this.compileWebCall();
  }

  compileWebCall()
  {
    this.webCall = this.webAddress + "?code=" + this.apiCode;
    console.log(this.webCall);
  }

  webseviceSubmit()
  {
    this.isLoading = true;
    this.http.get(this.webCall).subscribe(data => {
      console.log(data);
      this.webServiceResponse = JSON.stringify(data,null,2);
      this.isLoading = false;
    }, error => {
      console.error(error);
      this.webServiceResponse = JSON.stringify(error,null,2);
      this.isLoading = false;
    });
  }
  teamListSubmit()
  {
    this.isLoading = true;
    this.webCall = this.webAddress + "teamlist?code=" + this.apiCode;
    this.http.get(this.webCall).subscribe(data => {
      console.log(data);
      this.webServiceResponse = JSON.stringify(data,null,2);
      this.teamList = convertTeamListFromJSON(data)
      this.isLoading = false;
    }, error => {
      console.error(error);
      this.webServiceResponse = JSON.stringify(error,null,2);
      this.isLoading = false;
    });
    
  }
  fixtureListSubmit()
  {
    this.isLoading = true;
    this.webCall = this.webAddress + "fixturelist?code=" + this.apiCode;
    this.http.get(this.webCall).subscribe(data => {
      console.log(data);
      this.webServiceResponse = JSON.stringify(data,null,2);
      this.fixtureList = convertFixtureListFromJSON(data,this.teamList)
      this.isLoading = false;
    }, error => {
      console.error(error);
      this.webServiceResponse = JSON.stringify(error,null,2);
      this.isLoading = false;
    });

  }
  predictionListSubmit()
  {
    this.isLoading = true;
    this.webCall = this.webAddress + "predictionlist?code=" + this.apiCode;
    this.log("Web Service Call: \n" + this.webCall);
    
    this.http.get(this.webCall).subscribe(data => {

      this.logResponse(JSON.stringify(data,null,2));
      this.predictionList = convertPredictionListFromJSON(data,this.fixtureList)
      this.isLoading = false;
    }, error => {

      this.log( JSON.stringify(error,null,2));
      this.isLoading = false;
    });

  }
  predictSubmit()
  {
    this.isLoading = true;
    this.webCall = this.webAddress + "predictionadd";
    this.webCall += "?HomeTeamScore=" + this.homeTeamScore + "&AwayTeamScore=" + this.awayTeamScore + "&FixtureID=" + this.selectedOption.fixtureID;
    this.webCall += "&code=" + this.apiCode
    this.log("Web Service Call: \n" + this.webCall);
    
    this.http.get(this.webCall).subscribe(data => {

      this.logResponse(JSON.stringify(data,null,2));
      this.isLoading = false;
    }, error => {
      this.doneCorrect = true;
      this.log( JSON.stringify(error,null,2));
      this.isLoading = false;
      this.responseShortText = "Error: " + error.status + " " + error.statusText;
      if(error.status == 401)
      {
        this.responseShortText += ". Have you entered your API Key?";
      }
      this.clearIndicatorsTimer();

    });

  }
  clearIndicators()
  {
    this.responseShortText = "";
    this.doneCorrect = false;
    this.doneError = false;
  }
  clearIndicatorsTimer()
  {
    setTimeout(()=>{
      this.responseShortText = "";
      this.doneCorrect = false;
      this.doneError = false;
    },5000);
    
  }

  log(text : string)
  {
    this.webServiceResponse += text + "\n";
  }
  logResponse(text : string)
  {
    this.log("The response is:")
    this.webServiceResponse += text + "\n";
  }
}
