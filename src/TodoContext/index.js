import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){

    const {
        item: todos, 
        saveItem: saveTodos, 
        loading,
        error} = useLocalStorage('TODOS_V1',[]);
      
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
      const completedTodos = todos.filter(todo=> !!todo.completed).length;
      const totalTodos = todos.length;
      let filteredTodos = [];
      if (searchValue.length>=1){
        filteredTodos = todos.filter(todo=>todo.text.toLowerCase().includes(searchValue.toLowerCase()))
      }else{
        filteredTodos = todos;
      }
    
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo=>todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      };

      const addTodo = (newItem) => {
        const newTodos = [...todos];
        newTodos.push({
          text: newItem,
          completed: false
        });
        saveTodos(newTodos);
      }
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo=>todo.text === text);
        const newTodos =  [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };
    
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            filteredTodos,
            completeTodo,
            addTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider}