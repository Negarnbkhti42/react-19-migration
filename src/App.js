import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [items, setItems] = useState([
    {
      title: 'preparing KS docs',
      completed: false,
    },
    {
      title: 'debugging features',
      completed: true,
    }
  ])

  const addToDo = (newItem) => {
    setItems(prevState => [...prevState, {title: newItem, completed: false}])
  }

  const onClickOnItem = (index) => {
    
    setItems(prevState => {

      return [...prevState.slice(0, index),{...prevState[index], completed: !prevState[index].completed}, ...prevState.slice(index + 1)];
    })
  }
  return <>
  <TodoList items={items}  onClick={onClickOnItem} />
  <TodoForm onSubmit={addToDo} />
  </>
}

export default App;
