import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as fromApp from '../store/app.reducer';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
	isLoginMode = true;
	errorMessage = '';
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

	onToggleLoginMode() {
		this.isLoginMode = !this.isLoginMode;
	}

	ngOnDestroy() {
		this.nightModeSubscription.unsubscribe();
	}
}
