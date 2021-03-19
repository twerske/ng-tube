import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { VideoGridComponent } from './video-grid/video-grid.component';

const routes: Routes = [
  { path: '', component: VideoGridComponent },
  { path: 'feed/:type', component: FeedComponent },
  { path: '**', component: VideoGridComponent },  // Wildcard route for a 404 page redirects to Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
