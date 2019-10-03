import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from './store/app.reducer';
import * as SharedActions from './shared/store/shared.actions';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
	darkMode: boolean;
	nightModeSubscription: Subscription;

	constructor(private store: Store<fromApp.AppState>) {}

	ngOnInit() {
		onInitMaterializeJs();
		this.nightModeSubscription = this.store
			.select('shared')
			.pipe(map(sharedState => sharedState.nightMode))
			.subscribe((darkMode: boolean) => {
				this.darkMode = darkMode;
			});
		this.store.dispatch(new SharedActions.CheckDarkMode());
	}

	ngOnDestroy() {
		this.nightModeSubscription.unsubscribe();
	}
}

const onInitMaterializeJs = () => {
	// For Collapsible List
	let elems: any;
	let instances: any;
	
	elems = document.querySelectorAll('.collapsible');
	instances = M.Collapsible.init(elems);
	
	elems = document.querySelectorAll('.sidenav');
	instances = M.Sidenav.init(elems);

	elems = document.querySelectorAll('.tabs');
	elems.forEach(elem => {
		instances = M.Tabs.init(elem);
	});
};
