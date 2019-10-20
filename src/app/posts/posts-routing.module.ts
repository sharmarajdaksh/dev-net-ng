import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { PostsComponent } from './posts.component';
import { CreateComponent } from './create/create.component';
import { PostComponent } from './post/post.component';
import { DiscussionsComponent } from './discussions/discussions.component';

const routes: Routes = [
	{
		path: 'post',
		children: [
			{ path: '', component: PostComponent },
			{ path: 'discussions', component: DiscussionsComponent }
		]
	},
	{
		path: '',
		component: PostsComponent,
		children: [
			{ path: 'feed', component: FeedComponent },
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
