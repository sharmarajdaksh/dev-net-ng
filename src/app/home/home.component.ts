import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as fromApp from '../store/app.reducer';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
	darkMode: boolean;
	nightModeSubscription: Subscription;

	elems: any;
	instances: any;

	constructor(private store: Store<fromApp.AppState>) {}

	ngOnInit() {
		this.nightModeSubscription = this.store
			.select('shared')
			.pipe(map(sharedState => sharedState.nightMode))
			.subscribe((darkMode: boolean) => {
				this.darkMode = darkMode;
			});

		this.elems = document.querySelectorAll('.parallax');
		this.instances = M.Parallax.init(this.elems);
	}

	ngOnDestroy() {
		this.nightModeSubscription.unsubscribe();
	}

}
