import { User } from '../user.model';
import * as AuthActions from './auth.actions';

export interface State {
	user: User;
	authError: string;
	loading: boolean;
}

const initialState: State = {
	user: null,
	authError: null,
	loading: false
};

export function authReducer(
	state: State = initialState,
	action: AuthActions.AuthActions
) {
	switch (action.type) {
		case AuthActions.AUTH_SUCCESS:
			const { email, userId, token, expirationDate } = action.payload;
			const user = new User(email, userId, token, expirationDate);
			return {
				...state,
				authError: null,
				user,
				loading: false
			};
		case AuthActions.LOGOUT:
			return {
				...state,
				authError: null,
				user: null,
				loading: false
			};
		case AuthActions.LOGIN_START:
		case AuthActions.SIGNUP_START:
			return {
				...state,
				authError: null,
				loading: true
			};
		case AuthActions.AUTH_FAIL:
			return {
				...state,
				authError: action.payload,
				user: null,
				loading: false
			};
		case AuthActions.CLEAR_ERROR:
			return {
				...state,
				authError: null
			};
		default:
			return state;
	}
}
