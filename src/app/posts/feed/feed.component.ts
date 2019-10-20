import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as fromApp from '../../store/app.reducer';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-feed',
	templateUrl: './feed.component.html',
	styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {
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
	}

	ngOnDestroy() {
		this.nightModeSubscription.unsubscribe();
	}
}
