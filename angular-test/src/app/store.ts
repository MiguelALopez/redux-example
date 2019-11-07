import {ITodo} from './todo';
import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODOS} from './actions';

export interface IAppState {
    todos: ITodo[];
    lastUpdate: Date;
}

export interface IAppState2 {
    todos: ITodo[];
    lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
    todos: [],
    lastUpdate: null
}

export function rootReducer(state: IAppState, action) {
     switch(action.type) {
        case ADD_TODO: 
            action.todo.id = state.todos.length + 1;
            return Object.assign({}, state, {
                todos: state.todos.concat(Object.assign({}, action.todo)),
                lastUpdate: new Date()
            })
        case TOGGLE_TODO:
            var index;
            const todo = state.todos.find((todo, i) => {
                index = i;
                return todo.id === action.todo.id;
            });
            return Object.assign({}, state, {
                todos: [
                    ...state.todos.slice(0, index),
                    Object.assign({}, todo, {isCompleted: !todo.isCompleted}),
                    ...state.todos.slice(index + 1, )
                ],
                lastUpdate: new Date()
            });
        case REMOVE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter(todo => todo.id !== action.todo.id),
                lastUpdate: new Date()
            });
        case REMOVE_ALL_TODOS:
            return Object.assign({}, state, {
                todos: [],
                lastUpdate: new Date()
            });
    }
    return state;
}
