import React from "react";
import { TodoContext } from "../TodoContext";
import {toast} from 'react-toastify'
import './TodoForm.css'


function TodoForm(){

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {addTodo} = React.useContext(TodoContext);

    const {
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    const onChangeNewTodo = (event) => {
        let newTodo = event.target.value
        setNewTodoValue(newTodo)
    }

    const onCancel = ()=>{
        setOpenModal(false);
    };

    const onSubmit = (event)=>{
        event.preventDefault();

        if (newTodoValue.trim().length <= 0){
            toast.warning('Ingrese un TODO valido')
            return
        }


        addTodo(newTodoValue);
        setNewTodoValue('')
        setOpenModal(false);
        toast.success("Todo Agregado!");
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
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
                    Añadir
                </button>
            </div>

        </form>
    );
}

export {TodoForm};