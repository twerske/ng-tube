import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Video } from '../data/models/video.interface';
import { DUMMY_VIDEOS } from '../data/models/VIDEOS';
import { YoutubeService } from '../data/youtube.service';

@Component({
  selector: 'app-video-grid',
  templateUrl: './video-grid.component.html',
  styleUrls: ['./video-grid.component.scss']
})
export class VideoGridComponent implements OnInit {
  searchTags = ['Cats', 'Funny', 'Apartment', 'Podcasts', 'Recent', 'Baking', 'Minimalism']
  queries = ''
  
  videos: Video[] = [];
  private unsubscribe$: Subject<any> = new Subject();

  constructor(private youTubeService: YoutubeService) { }

  ngOnInit(): void {        
    this.retrieveVideos()
  }

  retrieveVideos() {
    this.youTubeService.getVideos(this.queries)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((items: any) => {
        this.videos = items
      });

    if (this.videos.length == 0) this.videos = DUMMY_VIDEOS;
  }

  changeQueries(param: string): void {
    this.queries += param
    this.retrieveVideos()
  }
}
