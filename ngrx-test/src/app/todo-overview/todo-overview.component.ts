import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITodo } from '../todo';
import { Store, select } from '@ngrx/store';
import { IAppState, todosSelector } from '../todo.reducer';
import { removeAllTodos } from "../counter.actions";

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.scss']
})
export class TodoOverviewComponent implements OnInit {

  todos: Observable<ITodo[]>;
  lastUpdate: Observable<Date>;

  constructor(private store: Store<{todo: IAppState}>) {
   }

  ngOnInit() {
    this.todos = this.store.pipe(select(state => state['todoReducer'].todos));
    this.lastUpdate = this.store.pipe(select(state => state['todoReducer'].lastUpdate));
    this.todos.subscribe(t => {
      console.log('estos son los todos:', t);
    });
  }

  clearTodos() {
    this.store.dispatch(removeAllTodos());
  }
}
