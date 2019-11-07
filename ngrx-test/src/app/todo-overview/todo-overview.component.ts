import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '../todo';
import { Store, select } from '@ngrx/store';
import { ITodoState } from '../todo.reducer';
import { removeAllTodos } from "../counter.actions";
import { todos, lastUpdate } from '../todo.selector';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.scss']
})
export class TodoOverviewComponent implements OnInit {

  todos: Observable<ITodo[]>;
  lastUpdate: Observable<Date>;

  constructor(private store: Store<{todoState: ITodoState}>) {
   }

  ngOnInit() {
    this.todos = this.store.pipe(select(todos));
    this.lastUpdate = this.store.pipe(select(lastUpdate));
    this.todos.subscribe(t => {
      console.log('estos son los todos:', t);
    });
  }

  clearTodos() {
    this.store.dispatch(removeAllTodos());
  }
}
