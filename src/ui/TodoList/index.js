import React from 'react';
import './TodoList.css'

function TodoList(props) {
  return (
    
    <section>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {props.searchValue.length > 0
        ? (props.filteredTodos.length > 0 ? props.filteredTodos.map(props.render) : props.onEmptySearchResults(props.searchValue))
        : (!props.loading && (props.totalTodos > 0 ? props.filteredTodos.map(props.render) : props.onEmptyTodos()) )
      }
      {/* {!props.loading && props.totalTodos <= 0 && props.searchValue.length <=0 && props.onEmptyTodos()}
      {props.filteredTodos.length > 0 && 
        ? props.filteredTodos.map(props.render)
        : props.onEmptySearchResults(props.searchValue)
      } */}
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };
