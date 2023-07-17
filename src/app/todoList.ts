import { TodoItem } from "./todoItem";

export class TodoList{
    constructor(public user: string, private todoItems: TodoItem[] = []){

    }

    get items(): readonly TodoItem[] {
        return this.todoItems;
    }
    
    additem(task: string){
        this.todoItems.push(new TodoItem(task));
    }
}