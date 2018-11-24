import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import {wallStore, fetchWallsEpic} from './wall'

export const rootEpic = combineEpics(
    fetchWallsEpic,
);

export const rootReducer = combineReducers({
    wallStore,
});