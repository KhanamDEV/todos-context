import React, {useState, useEffect} from 'react';
import AppContext from "./Context";

const Provider = props => {

    const [todos, setTodo] = useState({tasks: []});


    useEffect(() => {
            let listTask = localStorage.getItem('todos') == null ? {tasks: []} : {tasks: JSON.parse(localStorage.getItem('todos'))};
            setTodo(listTask);
        }
        , []);

    const removeTask = id => {
        let newList = [...todos.tasks];
        let index = newList.findIndex(value => value.id === id);
        if (index >= 0) {
            newList.splice(index, 1);
            setTodo({...todos, tasks: newList});
            localStorage.setItem('todos', JSON.stringify(newList));
        }
    }

    const creatTask = data => {
        let newList = [...todos.tasks, data];
        setTodo({...todos, tasks: newList});
        localStorage.setItem('todos', JSON.stringify(newList));
    }

    const updateTask = id => {
        let newList = [...todos.tasks];
        let index = newList.findIndex(value => value.id === id);
        if (index >= 0) {
            newList[index] = {...newList[index], status: true}
            setTodo({...todos, tasks: newList});
            localStorage.setItem('todos', JSON.stringify(newList));
        }
    }

    return (

        <AppContext.Provider value={{
            tasks: todos.tasks,
            creatTask: creatTask,
            updateTask: updateTask,
            removeTask: removeTask,
        }}>
            {props.children}
        </AppContext.Provider>
    )

}

export default Provider;