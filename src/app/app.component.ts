declare var require: any;
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['../app/app.component.css', '../css/bootstrap.min.css', '../css/stylish-portfolio.css']
})
export class AppComponent  { 
  name = 'Angular'; 
  private chemistry = require("../assets/chemistry.jpg");
  private education = require("../assets/education.jpg");
  private globe = require("../assets/globe.jpg");
  private fading = require("../assets/fading-line.gif");
  private message = require("../assets/message.jpg");

}
