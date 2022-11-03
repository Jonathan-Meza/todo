import React from "react"
import { useLocation, useParams } from "react-router-dom"
import { TodoForm } from "../../ui/TodoForm"
import { useTodos } from "../useTodos";

function EditTodoPage(){
    const location = useLocation();
    const {state, stateUpdaters} = useTodos();
    const {loading, getTodoById} = state;
    const {editTodo} = stateUpdaters;
    const params = useParams();
    let todo;

    if ( location.state && location.state.todo){
        console.log('primer if')
        todo = location.state.todo
    }else{
        if (loading){
            return <p>cargando...</p>
        }else{
            todo = getTodoById(params.id)
        }
    }
    
    return <TodoForm
        label = "Edita tu TODO"
        defaultTodoText={todo.text}
        submitText="Editar"
        submitEvent={(newText)=>editTodo(params.id, newText)}
    />
    
}

export {EditTodoPage}