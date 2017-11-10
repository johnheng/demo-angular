import { Component, EventEmitter } from '@angular/core';
import { CommentService } from './comment.service';
import { Result } from './result';
import 'rxjs/add/operator/map';

@Component({
  selector: 'comments',
  templateUrl: 'comment-list.component.html',
  styleUrls: ['../css/stylish-portfolio.css']
})
export class CommentListComponent  { 
  constructor(private commentService: CommentService) {}
  comments: any;

  ngOnInit() {
    console.log("ngOnInit");
    this.commentService.get().subscribe((result: Result) => { this.comments = result.feed.entry;  });
  }
}

