import { Component,Input } from '@angular/core';

import { CommonModule} from '@angular/common';
//import AppComponent from '../app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-webservice-display',
  standalone: true,
  imports: [CommonModule,MatProgressSpinnerModule,MatIconModule,MatButtonModule],
  templateUrl: './webservice-display.component.html',
  styleUrl: './webservice-display.component.css'
})
export class WebserviceDisplayComponent {
  
  responseShortText = "";
  isLoading = false;

  doneCorrect = false;
  doneError = false;

  constructor( )  { }
  
  @Input() parentFunction?: () => void;
  @Input() buttonTitle :string  = 'ownloadxx';
  
  handleClick() {
    this.isLoading = true;
    if (this.parentFunction) {
      this.parentFunction();
    }
  }
  clearIndicatorsTimer()
  {
    setTimeout(()=>{
      this.responseShortText = "";
      this.doneCorrect = false;
      this.doneError = false;
    },2000);

  }
  
  //doSubmit()
 // {
  //  console.log("xx");
    // this.isLoading = true;
    // this.parent.webCall = this.webAddress + "predictionadd";
    // this.webCall += "?HomeTeamScore=" + this.homeTeamScore + "&AwayTeamScore=" + this.awayTeamScore + "&FixtureID=" + this.selectedOption.fixtureID;
    // this.webCall += "&code=" + this.apiCode
    // this.log("Web Service Call: \n" + this.webCall);

    // this.http.get(this.webCall).subscribe(data => {

    //   this.logResponse(JSON.stringify(data,null,2));
    //   this.isLoading = false;
    // }, error => {
    //   this.doneCorrect = true;
    //   this.log( JSON.stringify(error,null,2));
    //   this.isLoading = false;
    //   this.responseShortText = "Error: " + error.status + " " + error.statusText;
    //   if(error.status == 401)
    //   {
    //     this.responseShortText += ". Have you entered your API Key?";
    //   }
    //   this.clearIndicatorsTimer();

    // });

  //}
}
