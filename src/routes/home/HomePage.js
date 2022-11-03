import React from 'react';
import { useNavigate } from "react-router-dom"
import {  ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { useTodos } from '../useTodos';
import { TodoCounter } from '../../ui/TodoCounter';
import { TodoSearch } from '../../ui/TodoSearch';
import { TodoList } from '../../ui/TodoList';
import { TodoItem } from '../../ui/TodoItem';
import { CreateTodoButton } from '../../ui/CreateTodoButton';
import { TodoHeader } from "../../ui/TodoHeader";
import { TodosError } from '../../ui/TodosError';
import { TodosLoading } from '../../ui/TodosLoading';
import { EmptyTodos } from '../../ui/EmptyTodos';
import { ChangeAlert} from '../../ui/ChangeAlert'

function HomePage() {

  const navigate = useNavigate();
  const {state, stateUpdaters} = useTodos();

  const {
    error, 
    loading, 
    filteredTodos, 
    completeTodo,
    completedTodos,
    totalTodos,
    searchValue
  } = state;

  const {
    // setOpenModal,
    // addTodo,
    deleteTodo,
    setSearchValue,
    sincronizedTodos
  } = stateUpdaters;

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter 
          totalTodos = {totalTodos}
          completedTodos = {completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
      <TodoList
        error = {error}
        loading = {loading}
        filteredTodos = {filteredTodos}
        searchValue = {searchValue}
        totalTodos = {totalTodos}
        onError = {()=><TodosError/>}
        onLoading = {()=> <TodosLoading/>}
        onEmptyTodos={()=><EmptyTodos/>}
        onEmptySearchResults = { (textSearch) => <p>no hay resultados para {textSearch}</p>}
        render = {todo=> (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onEdit = {()=>{
              navigate(`/edit/${todo.id}`,
              {
                state: {todo}
              }
            )}}
            onComplete= {()=>{completeTodo(todo.id)}}
            onDelete={()=>{deleteTodo(todo.id)}}
          />
        )}
      />

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
      <CreateTodoButton
        onClick={()=>{navigate("/new")}}
      />
      <ChangeAlert
        sincronize = {sincronizedTodos}
      />
    </React.Fragment>

  );

}

export {HomePage};