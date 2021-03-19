import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Video } from './models/video.interface';
import { DUMMY_VIDEOS } from './models/VIDEOS';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private API_URL = 'https://www.googleapis.com/youtube/v3/search';

  // TODO: Set up your project and API key here: https://developers.google.com/youtube/v3/getting-started
  private API_KEY : string = '';

  constructor(public http: HttpClient) { }
    getVideos(query?: string): Observable<any> {
      query = query ? query : "cats"
      const url = `${this.API_URL}?q=${query}&key=${this.API_KEY}&part=snippet&type=video&maxResults=24`;
      return this.http
        .get(url)
        .pipe(
          map((response: any) => 
            response.items.map((item: any) => {
              return {
                title: item.snippet.title,
                videoId: item.id.videoId,
                videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
                channelId: item.snippet.channelId,
                channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
                channelTitle: item.snippet.channelTitle,
                description: item.snippet.description,
                publishedAt: new Date(item.snippet.publishedAt),
                thumbnail: item.snippet.thumbnails.high.url
              }
            })
        ));
    }
}
