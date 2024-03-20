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
import {Team,convertTeamListFromJSON,testTeamList,
        Fixture,convertFixtureListFromJSON,testFixtureList,
        Prediction,convertPredictionListFromJSON,testPredictionList}  from '../model/app.model';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, MatInputModule, MatFormFieldModule,
    //BrowserAnimationsModule,
            FormsModule,MatButtonModule,MatIconModule,HttpClientModule,
            MatProgressSpinnerModule,MatTabsModule,MatListModule,MatSelectModule,MatAutocompleteModule],
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

  teamList : Array<Team> = [];
  fixtureList : Array<Fixture> = [];
  predictionList : Array<Prediction> = [];
  constructor(private http: HttpClient) 
  {
    this.compileWebCall();
    //this.teamList = convertTeamListFromJSON(testTeamList)
    //this.fixtureList = convertFixtureListFromJSON(testFixtureList)
    //this.predictionList = convertPredictionListFromJSON(testPredictionList)
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
    this.webCall = this.webAddress + "fixturelist?code=" + this.apiCode;
    this.http.get(this.webCall).subscribe(data => {
      console.log(data);
      this.webServiceResponse = JSON.stringify(data,null,2);
      this.fixtureList = convertFixtureListFromJSON(data)
      this.isLoading = false;
    }, error => {
      console.error(error);
      this.webServiceResponse = JSON.stringify(error,null,2);
      this.isLoading = false;
    });

  }
  predictionListSubmit()
  {
    this.webCall = this.webAddress + "predictionlist?code=" + this.apiCode;
    this.http.get(this.webCall).subscribe(data => {
      console.log(data);
      this.webServiceResponse = JSON.stringify(data,null,2);
      this.predictionList = convertPredictionListFromJSON(data)
      this.isLoading = false;
    }, error => {
      console.error(error);
      this.webServiceResponse = JSON.stringify(error,null,2);
      this.isLoading = false;
    });

  }
}
