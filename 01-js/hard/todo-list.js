/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
    constructor(todoList = []) {
        this.todoList = todoList
    }
    add(task) {
        this.todoList.push(task)
    }
    remove(indexTodo) {
        let updateTodo = this.todoList.filter((todo, index) => index != indexTodo);
        this.todoList = updateTodo;
    }
    update(index, updateTodo) {
        let update = this.todoList.map((todo, todoIndex) => {
            if (todoIndex == index) {
                todo = updateTodo;
            }
            return todo;
        })
        this.todoList = update;
    }
    getAll() {
        return this.todoList;
    }
    get(index) {
        let listIndex = this.todoList.length;
        if (listIndex - 1 < index) {
            return null;
        }
        return this.todoList[index];
    }
    clear() {
        this.todoList = [];
        return this.todoList;
    }

}

module.exports = Todo;
