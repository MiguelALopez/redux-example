import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCounterComponent } from './my-counter/my-counter.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { todoReducer } from "./todo.reducer";
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';



@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    TodoOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ countReducer: counterReducer,  todoReducer: todoReducer} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
