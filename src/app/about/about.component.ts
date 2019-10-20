import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
	imageBaseAddress = 'assets/images/developers/';
	developers = [
		{
			name: 'Charanjit Singh',
			devnetProfileLink: '#',
			description:
				'Something about the developer lorem ipsum dipsum asgdaskj adshgsda gads sdagahsd asdjagsd sad',
			imageName: 'dex.png'
		},
		{
			name: 'Dakshraj Sharma',
			devnetProfileLink: '#',
			description:
				'Something about the developer lorem ipsum dipsum asgdaskj adshgsda gads sdagahsd asdjagsd sad',
			imageName: 'dex.png'
		},
		{
			name: 'Kamalpreet Singh',
			devnetProfileLink: '#',
			description:
				'Something about the developer lorem ipsum dipsum asgdaskj adshgsda gads sdagahsd asdjagsd sad',
			imageName: 'dex.png'
		}
	];

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
