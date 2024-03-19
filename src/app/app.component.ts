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
import {Team,convertTeamListFromJSON,testTeamList}  from '../model/app.model';

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
  webAddress = "https://punditdogfws.azurewebsites.net/api/HttpExample";
  apiCode = "";
  //webCall = this.webAddress + "?code=" + this.apiCode;
  webCall = "";

  webServiceResponse = "";

  teamList : Array<Team> = [];
  constructor(private http: HttpClient) 
  {
    this.compileWebCall();
    this.teamList = convertTeamListFromJSON(testTeamList)
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
}
