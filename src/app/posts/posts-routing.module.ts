import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { PostsComponent } from './posts.component';
import { CreateComponent } from './create/create.component';
import { ExploreComponent } from './explore/explore.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
	{
		path: 'post',
		component: PostComponent
	},
	{
		path: '',
		component: PostsComponent,
		children: [
			{ path: 'feed', component: FeedComponent },
			{ path: 'explore', component: ExploreComponent },
			{ path: 'create', component: CreateComponent },
			{ path: '**', redirectTo: 'feed' }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PostsRoutingModule {}
