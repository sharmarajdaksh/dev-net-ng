import { ActionReducerMap } from '@ngrx/store';
import * as fromShared from '../shared/store/shared.reducer';

export interface AppState {
	shared: fromShared.State;
}

export const appReducer: ActionReducerMap<AppState> = {
	shared: fromShared.sharedReducer
};