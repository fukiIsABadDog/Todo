import { Component } from '@angular/core';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list = new TodoList("Bob", [
    new TodoItem("Squat"),
    new TodoItem("Press"),
    new TodoItem("Deadlift"),
  ]);

  get username(): string {
    return this.list.user
  }

  get itemCount(): number {
    return this.list.items.filter(item => !item.complete).length;
  }
}
