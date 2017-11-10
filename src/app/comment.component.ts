import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'comment',
  templateUrl: 'comment.component.html',
  styles: ['span { display: block }'],
  styleUrls: ['../css/stylish-portfolio.css']
})
export class CommentComponent  { 
    @Input() comment: any;
    @Input() position: string;

    private robot = require("../assets/profile-robot-6e0fe619f5a6403e4561a283abaad2d2.jpg");
    private cat = require("../assets/profile-sun-16d0155059fd19acbc698cd68e71ac6e.jpg");
    private yeti = require("../assets/profile-yeti-1362e595fd49dcd42ac7bf77c75fd9d3.jpg");

    private images = [this.robot,this.cat,this.yeti];
    private image = this.images[Math.floor(Math.random() * 3)]
}
