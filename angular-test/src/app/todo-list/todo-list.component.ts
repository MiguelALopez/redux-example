import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from "@angular-redux/store";
import { IAppState } from "../store";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions";
import { ITodo } from "../todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @select() todos;
  @select() lastUpdate;

  model: ITodo = {
    id: 0,
    description: "",
    responsible: "",
    priority: "low",
    isCompleted: false
  };

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  onSubmit() {
    this.ngRedux.dispatch({type: ADD_TODO, todo: this.model});
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({type: TOGGLE_TODO, todo: todo});
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({type: REMOVE_TODO, todo: todo});
  }
}
