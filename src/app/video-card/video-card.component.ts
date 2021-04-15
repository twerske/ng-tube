import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../data/models/video.interface';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {
  @Input() video : Video | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
