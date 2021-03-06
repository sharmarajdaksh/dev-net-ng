import { NgModule } from '@angular/core';
import { PostComponent } from './post/post.component';
import { PostsRoutingModule } from './posts-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FeedComponent } from './feed/feed.component';
import { CreateComponent } from './create/create.component';
import { PostsComponent } from './posts.component';
import { RouterModule } from '@angular/router';
import { DiscussionsComponent } from './discussions/discussions.component';

@NgModule({
	declarations: [
		PostComponent,
		FeedComponent,
		CreateComponent,
		PostsComponent,
		DiscussionsComponent
	],
	imports: [PostsRoutingModule, SharedModule, RouterModule]
})
export class PostsModule {}
