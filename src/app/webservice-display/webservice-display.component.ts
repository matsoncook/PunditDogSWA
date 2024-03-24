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
  
  success()
  {
    this.isLoading = false;
    this.clearIndicatorsTimer();
  }
  error(errorText : string)
  {
    this.isLoading = false;
    this.responseShortText = errorText;
    this.clearIndicatorsTimer();
  }
}
