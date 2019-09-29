import * as SharedActions from './shared.actions';

export interface State {
	nightMode: boolean;
}

const initialState: State = {
	nightMode: false
};

export function sharedReducer(
	state: State = initialState,
	action: SharedActions.SharedActions
) {
	switch (action.type) {
		case SharedActions.SET_DARK_MODE:
			return {
				...state,
				nightMode: true
			};
		case SharedActions.SET_LIGHT_MODE:
			return {
				...state,
				nightMode: false
			};

		default:
			return state;
	}
}
