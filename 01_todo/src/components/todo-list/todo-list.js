import React from 'react';

import TodoListItem from "../todo-list-item";
import './todo-list.css';

const TodoList = ({ todos, filter, onDeleted, searchText, onToggleDone, onToggleImportant }) => {

    let todosFiltered;

    switch (filter){
        case 'active':
            todosFiltered = todos.filter((el) => el.done === false);
            break;
        case 'done':
            todosFiltered = todos.filter((el) => el.done === true);
            break;
        default:
            todosFiltered = todos;
            break;
    }

    if (searchText){
        todosFiltered = todosFiltered.filter((el) => el.label.includes(searchText));
    }

    const elements = todosFiltered.map((item) => {
        const {id, ...itemProps} = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleDone={() => onToggleDone(id)}
                    onToggleImportant={() => onToggleImportant(id)}/>
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;