import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import * as SharedActions from '../shared/store/shared.actions';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
	isPosts: boolean;
	routeSubscription: Subscription;

	constructor(
		private store: Store<fromApp.AppState>,
		private router: Router
	) {}

	ngOnInit() {
		// TODO: Make navbar non-fixed on /posts
		this.routeSubscription = this.router.events.subscribe(
			(event: Event) => {
				if (event instanceof NavigationEnd) {
					if (this.router.url === '/posts/feed') {
						this.isPosts = true;
					} else {
						this.isPosts = false;
					}
				}
			}
		);
	}

	ngOnDestroy() {
		this.routeSubscription.unsubscribe();
	}

	onToggleNightMode() {
		this.store.dispatch(new SharedActions.ToggleDarkMode());
	}
}
