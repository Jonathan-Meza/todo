import React from "react";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import './TodoForm.css'


function TodoForm(props){
    const navigate = useNavigate();
    const [newTodoValue, setNewTodoValue] = React.useState(props.defaultTodoText);

    const onChangeNewTodo = (event) => {
        let newTodo = event.target.value
        setNewTodoValue(newTodo)
    }

    const onCancel = ()=>{
        navigate("/");
    };

    const onSubmit = (event)=>{
        event.preventDefault();

        if (newTodoValue.trim().length <= 0){
            toast.warning('Ingrese un TODO valido')
            return
        }


        toast.success("Todo Agregado!");
        props.submitEvent(newTodoValue)
        navigate("/")
    };

    return (
        <form onSubmit={onSubmit}>
            <label>{props.label}</label>
            <textarea 
                id="newTodoxxx"
                placeholder="Cortar la cebolla para el almuerzo"
                value={newTodoValue}
                onChange={onChangeNewTodo}
            />
            <div className="TodoForm-buttonContainer">
                <button 
                    type="button" 
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button--cancel"
                >
                    Cancelar
                </button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add" 
                >
                    {props.submitText}
                </button>
            </div>

        </form>
    );
}

export {TodoForm};