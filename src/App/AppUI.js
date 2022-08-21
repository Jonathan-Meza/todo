import React from "react";

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import {TodoContext} from '../TodoContext'
import {Modal} from '../Modal'
import { TodoForm } from "../TodoForm";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import {Code} from "react-content-loader"
import MyLoader from "../Loader";


function AppUI(){

    const {
        error, 
        loading, 
        searchedTodos, 
        filteredTodos, 
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal} = React.useContext(TodoContext);
        
    return(
        <React.Fragment>
            <TodoCounter />
            <TodoSearch/>
            <TodoList>
                <div style={{margin: "30px"}}>
                    {error && <p>Desesperate, tenemos un error.....</p>}
                    {loading && <MyLoader/>}
                    {(!loading && !searchedTodos) && <p>Crea tu primer todo.....</p>}
                </div>
                {filteredTodos.map(todo => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete= {()=>{completeTodo(todo.text)}}
                    onDelete={()=>{deleteTodo(todo.text)}}
                />
                ))}
            </TodoList>

            {!!openModal && (<Modal>
                <TodoForm></TodoForm>
            </Modal>)}

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                />

            <CreateTodoButton />

        </React.Fragment>
    );
}

export {AppUI}