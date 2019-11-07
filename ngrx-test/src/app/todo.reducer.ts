import { createReducer, on, createSelector } from "@ngrx/store";
import { addTodo, toggleTodo, removeTodo, removeAllTodos } from "./counter.actions";
import { ITodo } from './todo';

export interface ITodoState {
    todos: ITodo[];
    lastUpdate: Date;
}

export const initialState: ITodoState = {
    todos: [{
        description: 'nothing to do',
        id: 1,
        isCompleted: false,
        priority: 'low',
        responsible: 'miguel'
    }],
    lastUpdate: null
};

const _todoReducer = createReducer(initialState,
    on(addTodo, (state, {todo}) => {
        return Object.assign({}, state, {
            todos: state.todos.concat(Object.assign({}, todo)),
            lastUpdate: new Date()
        });
    }),
    on(toggleTodo, (state, {todo}) => {
        var index;
        const newTodo = state.todos.find((t, i) => {
            index = i;
            return t.id === todo.id;
        })
        return Object.assign({}, state, {
            todos: [
                ...state.todos.slice(0, index),
                Object.assign({}, newTodo, {isCompleted: !newTodo.isCompleted}),
                ...state.todos.slice(index + 1)
            ],
            lastUpdate: new Date()
        });
    }),
    on(removeTodo, (state, {todo}) => {
        return Object.assign({}, state, {
            todos: state.todos.filter(t => t.id !== todo.id),
            lastUpdate: new Date()
        });
    }),
    on(removeAllTodos, state => {
        return Object.assign({}, state, {
            todos: [],
            lastUpdate: new Date()
        });
    })
);

export function todoReducer(state: ITodoState, action): ITodoState {
    return _todoReducer(state, action);
}
