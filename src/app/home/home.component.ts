import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { RssService } from './rss.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recentEpisodes$: Observable<any>;

  constructor (private rss: RssService) { }

  ngOnInit() {

    this.recentEpisodes$ = this.rss.getFeed();
  }

}
