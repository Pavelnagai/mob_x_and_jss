import {observer} from "mobx-react-lite";
import todolist from "./store/todolist";
import {useState} from "react";
import {createUseStyles} from 'react-jss'


const useStyles = createUseStyles({
    todolist: {
        width: "250px",
        height: "350px",
        border: "1px solid black",
        borderRadius: "5px",
        backgroundColor: "#8989ff",
        margin: "20px"
    },
    formAddTodos: {
        margin: "20px",
        display: "flex",
        alignItems: "center",
        "& > input": {
            height: "30px",
            outline: "none",
            marginRight: "10px",
            borderRadius: "4px",
            fontSize: "16px",
        },
        "& > button": {
            backgroundColor: "#7373ff",
            height: "30px",
            borderRadius: "4px",
        }
    },
    card: {
        display: "flex",
        justifyContent: "space-between",
        textAlign: "start",
        paddingLeft: "20px",
        paddingRight: "20px",

    }
})


const Todo = observer(() => {
    const [name, setName] = useState("")

    function changeName(e) {
        setName(e.target.value)
    }

    function addTodo() {
        const todo = {
            title: name,
            id: todolist.todos.length + 1,
            success: false,
        };
        todolist.addTodo(todo)
        setName("")
    }

    function addTodos(){
        todolist.todos.push([])
    }


    const classes = useStyles()
    return (
        <div>
            <div className={classes.formAddTodos}>
                <input type="text" value={name} onChange={changeName}/>
                <button onClick={() => addTodos()}>AddTodos</button>
            </div>

            {todolist.todos.map((el, i) => {
                return (
                    <div key={i} className={classes.todolist}>
                        <div className={classes.formAddTodos}>
                            <input type="text"/>
                            <button>add</button>
                        </div>
                        {el.map(el => {
                            return (
                                <div className={classes.card} key={el.id}>
                                    <div>
                                        <input type="checkbox" checked={el.success} onChange={() => {
                                            todolist.successBol(el.id, i)
                                        }}/>
                                        {el.title}
                                    </div>
                                    <button onClick={() => {
                                        todolist.removeTodo(el.id, i)
                                    }}>x
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
})

export {Todo}