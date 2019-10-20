import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducer';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
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
