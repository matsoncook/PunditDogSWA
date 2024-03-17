import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatInputModule,MatFormFieldModule,
    //BrowserAnimationsModule,
    FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PunditDogSWA';
  webAddress = "hello";
  apiCode = "sdfsdfhbfdhbf==";
  webCall = this.webAddress + "?code=" + this.apiCode;
}
