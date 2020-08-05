import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Todos';
  todos = [
    {
    label: 'Bring Burger',
    done: false,
    priority: 3,
  },
   {
    label: 'Pay mobile bill',
    done: true,
    priority: 2,
  },
   {
    label: 'Buy Groceries',
    done: true,
    priority: 4,
  },
   {
    label: 'Budget',
    done: false,
    priority: 3,
  },
   ];
   addTodo(newTodoLabel) {
     var newTodo = {
      label: newTodoLabel,
      priority: 1,
      done: false
     };
     this.todos.push(newTodo);
   }

   deleteTodo(todo) {
     this.todos = this.todos.filter( t => t.label !== todo.label );
   }
}
