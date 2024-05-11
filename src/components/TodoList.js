import React from "react";

function TodoList({ items }) {
    return <ul>
        {items.map(item => <li>{item.title}</li>)}
    </ul>
}

export default TodoList;