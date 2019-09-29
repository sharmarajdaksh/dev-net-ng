import { Action } from '@ngrx/store';

export const TOGGLE_DARK_MODE = '[Global] Toggle Dark Mode';
export const SET_DARK_MODE = '[Global] Set Dark Mode';
export const SET_LIGHT_MODE = '[Global] Set Light Mode';
export const CHECK_DARK_MODE = '[Global] Check Night Mode';

export class ToggleDarkMode implements Action {
	readonly type = TOGGLE_DARK_MODE;
}
export class SetDarkMode implements Action {
	readonly type = SET_DARK_MODE;
}
export class SetLightMode implements Action {
	readonly type = SET_LIGHT_MODE;
}
export class CheckDarkMode implements Action {
	readonly type = CHECK_DARK_MODE;
}

export type SharedActions =
	| ToggleDarkMode
	| SetDarkMode
	| SetLightMode
	| CheckDarkMode;
