import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatInputModule, MatFormFieldModule,
    //BrowserAnimationsModule,
    FormsModule,MatButtonModule,MatIconModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PunditDogSWA';
  webAddress = "hello";
  apiCode = "sdfsdfhbfdhbf==";
  //webCall = this.webAddress + "?code=" + this.apiCode;
  webCall = '';

  webServiceResponse = "";

  constructor(private http: HttpClient) { }

  onSubmit() {
    console.log('Form submitted');
    this. webseviceSubmit();
  }

  webseviceSubmit()
  {
    this.http.get(this.webCall).subscribe(data => {
      console.log(data);
      this.webServiceResponse = JSON.stringify(data,null,2);
    }, error => {
      console.error(error);
    });
  }
}
