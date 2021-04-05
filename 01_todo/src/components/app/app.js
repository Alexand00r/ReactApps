import React, { Component } from 'react';

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

import './app.css'

export default class App extends Component {

    state = {
        todoData: [
            {id: 1, label: 'Drink Coffee', important: false, done: false},
            {id: 2, label: 'Make Awesome App', important: true, done: false},
            {id: 3, label: 'Have a lunch', important: false, done: false}
        ]
    };

    deleteItem = (itemId) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === itemId);
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            };
        });
    };

    render () {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                />
            </div>
        );
    }
};