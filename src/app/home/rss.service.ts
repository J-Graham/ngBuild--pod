import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as xml2js from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class RssService {

  constructor (private http: HttpClient) { }

  getFeed() {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text'
    };
    return this.http
      .get<any>('https://anchor.fm/s/12783130/podcast/rss', requestOptions).pipe(map((data) => {
        const parseString = xml2js.parseString;
        let channel;
        parseString(data, (err, result: any) => {
          channel = result.rss.channel[0].item;
        });
        console.log(channel);
        return channel;
      }
      ));
  }
}
