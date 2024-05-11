import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [items, setItems] = useState([
    {
      title: 'preparing KS docs'
    },
    {
      title: 'debugging features'
    }
  ])

  const addToDo = (newValue) => {
    setItems(prevState => [...prevState, {title: newValue}])
  }
  return <>
  <TodoList items={items} />
  <TodoInput onSubmit={addToDo} />
  </>
}

export default App;
