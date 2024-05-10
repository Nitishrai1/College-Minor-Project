import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './todos/todos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [TodosComponent]
})
export class AppComponent {
  title = 'todo-app';
  constructor(){
    setTimeout(() => {
      this.title="Change title";
    }, 2000);
  }
}
