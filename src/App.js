import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar curso de React.js', completed: false},
  {text: 'Llorar con la Llorona', completed: false},
  {text: 'LALALALALALA', completed: false},
];

function App() {
  return (
   <>  {/*FORMA DE ABREVIAR LOS FRAGMENTS */}
        <TodoCounter completed={16} total={25} />
        <TodoSearch />

        <TodoList />
           {defaultTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
            />
           ))}
        <TodoList />
        
      </>  
  );
}




export default App;
