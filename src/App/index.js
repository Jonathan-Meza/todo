import React from 'react';
import {  TodoCounter } from '../TodoCounter';
import {  TodoSearch } from '../TodoSearch';
import {  TodoList } from '../TodoList';
import {  TodoItem } from '../TodoItem';
import {  CreateTodoButton } from '../CreateTodoButton';
import {  Modal} from '../Modal'
import {  TodoForm } from "../TodoForm";
import {  ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {  TodoHeader } from "../TodoHeader";
import {  useTodos} from "./useTodos"
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { ChangeAlert} from '../ChangeAlert'

function App() {

  const {
    error, 
    loading, 
    searchedTodos, 
    filteredTodos, 
    completeTodo,
    deleteTodo,
    openModal,
    completedTodos,
    totalTodos,
    searchValue, 
    setSearchValue,
    setOpenModal,
    addTodo,
    sincronizedTodos} = useTodos();

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
        searchedTodos = {searchedTodos}
        filteredTodos = {filteredTodos}
        searchValue = {searchValue}
        totalTodos = {totalTodos}
        onError = {()=><TodosError/>}
        onLoading = {()=> <TodosLoading/>}
        onEmptyTodos={()=><EmptyTodos/>}
        onEmptySearchResults = { (textSearch) => <p>no hay resultados para {textSearch}</p>}
        render = {todo=> (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete= {()=>{completeTodo(todo.text)}}
            onDelete={()=>{deleteTodo(todo.text)}}
          />
        )}
      />

      {!!openModal && ( 
      <Modal>
        <TodoForm
          addTodo = {addTodo}
          openModal = {openModal}
          setOpenModal = {setOpenModal}
        />
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
      <CreateTodoButton
        openModal = {openModal}
        setOpenModal = {setOpenModal}
      />
      <ChangeAlert
        sincronize = {sincronizedTodos}
      />
    </React.Fragment>

  );

}

export default App;