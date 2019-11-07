import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../todo.reducer';
import { Observable } from 'rxjs';
import { ITodo } from '../todo';
import { addTodo, toggleTodo, removeAllTodos } from '../counter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Observable<ITodo[]>;
  lastUpdate: Observable<Date>;

  model: ITodo = {
    id: 0,
    description: "",
    responsible: "",
    priority: "",
    isCompleted: false
  };

  constructor(private store: Store<{todoReducer: IAppState}>) { }

  ngOnInit() {
    this.todos = this.store.pipe(select(state => state['todoReducer'].todos));
    this.lastUpdate = this.store.pipe(select(state => state['todoReducer'].lastUpdate));
  }

  onSubmit() {
    this.store.dispatch(addTodo({todo: this.model}));
  }

  toggleTodo() {
    this.store.dispatch(toggleTodo({todo: this.model}));
  }

  removeTodo() {
    this.store.dispatch(removeAllTodos());
  }
}
