import {makeAutoObservable} from "mobx";

class Todolist {
    todos = [
        [
            {title: "New", id: 1, success: true},
            {title: "Vad", id: 2, success: true},
            {title: "Love", id: 3, success: true},
        ],
        [
            {title: "New", id: 4, success: true},
            {title: "Vad", id: 5, success: true},
            {title: "Love", id: 6, success: true},
        ],
        [
            {title: "New", id: 7, success: true},
            {title: "Vad", id: 8, success: true},
            {title: "Love", id: 9, success: true},
        ]
    ]


    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo) {
        // this.todo.push(todo)
    }

    removeTodo(id, i) {
        this.todos[i] = this.todos[i].filter(t => t.id !== id)
    }

    successBol(id, i) {
        console.log("succes")
        this.todos[i] = this.todos[i].map(el => el.id === id ? {...el, success: !el.success} : el)
    }
}

export default new Todolist();