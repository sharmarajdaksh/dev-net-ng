import { Effect, ofType, Actions } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as SharedActions from './shared.actions';

export class SharedEffects {
	
	@Effect()
	darkModeReload = this.actions$.pipe(
		ofType(SharedActions.CHECK_DARK_MODE),
		map(() => {
			const mode = localStorage.getItem('devNetTheme');
			if (mode === 'dark') {
				return new SharedActions.SetDarkMode();
			} else {
				return new SharedActions.SetLightMode();
			}
		})
	);

	@Effect()
	darkModeToggled = this.actions$.pipe(
		ofType(SharedActions.TOGGLE_DARK_MODE),
		map(() => {
			const mode = localStorage.getItem('devNetTheme');
			if (mode === 'dark') {
				localStorage.setItem('devNetTheme', 'light');
				return new SharedActions.SetLightMode();
			} else {
				localStorage.setItem('devNetTheme', 'dark');
				return new SharedActions.SetDarkMode();
			}
		})
	)

	constructor(private actions$: Actions) {}
}
