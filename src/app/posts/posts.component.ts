import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as fromApp from '../store/app.reducer';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
	darkMode: boolean;
	nightModeSubscription: Subscription;

	constructor(private store: Store<fromApp.AppState>) {}

	ngOnInit() {
		this.nightModeSubscription = this.store
			.select('shared')
			.pipe(map(sharedState => sharedState.nightMode))
			.subscribe((darkMode: boolean) => {
				this.darkMode = darkMode;
			});

		let instances: any;
		let elems: any;
		
		elems = document.querySelectorAll('.tabs');
		elems.forEach(elem => {
			instances = M.Tabs.init(elem);
		});
	}
	ngOnDestroy() {
		this.nightModeSubscription.unsubscribe();
	}
}
