import { createAction, props } from "@ngrx/store";
import { ITodo } from './todo';

export const increment = createAction('[Todo List Component] Increment');
export const decrement = createAction('[Todo List Component] Decrement');
export const reset = createAction('[Todo List Component] Reset');

export const addTodo = createAction('[Todo List Component] Add Todo', props<{todo: ITodo}>());
export const toggleTodo = createAction('[Todo List Component] Toggle Todo', props<{todo: ITodo}>());
export const removeTodo = createAction('[Todo List Component] Remove Todo', props<{todo: ITodo}>());
export const removeAllTodos = createAction('[Todo List Component] Remove All Todos');
