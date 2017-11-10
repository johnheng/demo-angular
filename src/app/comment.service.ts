import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CommentService {
  constructor(private http: Http) {}
  private jsonUrl = 'https://spreadsheets.google.com/feeds/list/1VaWHioyj_OzKQ5J9HXDCwoSDgSRhkwbYbI9ZP_Ub2RQ/ofdigrt/public/values?alt=json';
  data: Observable<Comment[]>;

  get() : Observable<{}> {
    return this.http.get(this.jsonUrl).
      map(response => response.json());
  }
}
