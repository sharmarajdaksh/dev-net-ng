import { NgModule } from '@angular/core';
import { PostComponent } from './post/post.component';
import { PostsRoutingModule } from './posts-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FeedComponent } from './feed/feed.component';
import { CreateComponent } from './create/create.component';
import { ExploreComponent } from './explore/explore.component';
import { PostsComponent } from './posts.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		PostComponent,
		FeedComponent,
		CreateComponent,
		ExploreComponent,
		PostsComponent
	],
	imports: [PostsRoutingModule, SharedModule, PostsRoutingModule, RouterModule]
})
export class PostsModule {}
