import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos(){
  
  const {
    item: todos, 
    saveItem: saveTodos, 
    sincronizeItem: sincronizedTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V4',[]);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo=> !!todo.completed).length;
  const totalTodos = todos.length;
  let filteredTodos = [];
  if (searchValue.length>=1){
    filteredTodos = todos.filter(todo=>todo.text.toLowerCase().includes(searchValue.toLowerCase()))
  }else{
    filteredTodos = todos;
  }
    
  const completeTodo = (id) => {
    const todoIndex = todos.findIndex(todo=>todo.id == id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const editTodo = (id, newText) => {
    const todoIndex = todos.findIndex(todo=>todo.id == id);
    const newTodos = [...todos];
    newTodos[todoIndex].text = newText;
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const id = newTodoId(todos);
    const newTodos = [...todos];
    newTodos.push({
      id: id,
      text: text,
      completed: false
    });
    saveTodos(newTodos);
  }

  const getTodoById = (id) => {
    const todoIndex = todos.findIndex(todo=>todo.id == id);
    return todos[todoIndex]
  }
    
  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex(todo=>todo.id == id);
    const newTodos =  [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
    
  const state = {
    error,
    loading,
    filteredTodos,
    totalTodos,
    completeTodo,
    completedTodos,
    searchValue,
    getTodoById
  }
  
  const stateUpdaters = {
    addTodo,
    editTodo,
    deleteTodo,
    setSearchValue,
    sincronizedTodos,
  };

  return {
    state,
    stateUpdaters
  }
}

function newTodoId(todoList){
  if ( todoList.length <= 0) return 1;

  const idList = todoList.map(todo => todo.id);
  return Math.max(...idList) +1;
}

export {useTodos}