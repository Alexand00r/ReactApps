import React, { Component } from 'react';

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";
import ItemStatusFilter from "../item-status-filter";

import './app.css'

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ],
        filter: 'all',
        searchText: ''
    };

    onSearch = (searchText) => {
        this.setState({searchText});
    };

    onFilterClick = (filterName) => {
        this.setState({
            filter: filterName
        });
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

    toggleProperty(arr, itemId, propName) {
        const idx = arr.findIndex((el) => el.id === itemId);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem.done};

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleDone = (itemId) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, itemId, 'done')
            };
        });
    };

    onToggleImportant = (itemId) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, itemId, 'important')
            };
        });
    };

    createTodoItem(label) {
        return {
            id: this.maxId++,
            label,
            important: false,
            done: false,
            visible: true
        };
    };

    addItem = (newLabel) => {
        const newItem = this.createTodoItem(newLabel);

        this.setState(({ todoData }) =>{

            const newArray = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArray
            };
        });
    };

    applyTextFilter (todoData, searchText) {

        if (todoData.length === 0){
            return todoData;
        }

        return todoData.filter((el) =>
                el.label.toLowerCase().includes(searchText.toLowerCase())
        );
    };

    applyStateFilter (todoData, filter) {
        switch (filter){
            case 'active':
                return todoData.filter((el) => el.done === false);
            case 'done':
                return todoData.filter((el) => el.done === true);
            case 'all':
            default:
                return todoData;
        }
    };

    render () {
        const {todoData, searchText, filter} = this.state;

        let filteredData = this.applyTextFilter(todoData, searchText);
        filteredData = this.applyStateFilter(filteredData, filter);

        const doneCount = todoData.filter((el) => el.done === true).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel
                        onSearch={this.onSearch}/>
                    <ItemStatusFilter
                        filter={filter}
                        onFilterClick={this.onFilterClick}/>
                </div>
                <TodoList
                    todos={filteredData}
                    filter={this.state.filter}
                    searchText={this.state.searchText}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />

                <ItemAddForm
                    onItemAdded={this.addItem}
                />
            </div>
        );
    }
};