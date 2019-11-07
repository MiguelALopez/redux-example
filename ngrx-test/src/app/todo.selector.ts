import { createSelector } from '@ngrx/store';
import { ITodoState } from './todo.reducer';

export const todosSelector = (state: ITodoState) => state.todos;
export const lastUpdateSelector = (state: ITodoState) => state.lastUpdate;

export const todos = createSelector(
    state => state['todoState'],
    todosSelector
);

export const lastUpdate = createSelector(
    state => state['todoState'],
    lastUpdateSelector
);
