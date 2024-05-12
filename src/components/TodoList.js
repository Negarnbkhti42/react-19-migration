import React from "react";
import '../styles/todo.css';

function TodoList({ items, onClick }) {
    return <ul>
    {items.map((item, index) => <li className={`todo ${item.completed && "todo--completed"}`} onClick={() => onClick(index)}>{item.title}</li>)}
</ul>;
}

export default TodoList;