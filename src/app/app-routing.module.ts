import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{
		path: 'auth',
		loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
	},
	{
		path: 'posts',
		loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
    },
    {
        path: 'profile',
		loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
    },
	{ path: '**', redirectTo: 'home' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes, {
			preloadingStrategy: PreloadAllModules
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
