import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

    buttons = [
        {name: 'all', label: "All"},
        {name: 'active', label: "Active"},
        {name: 'done', label: "Done"},
    ]

    activeButtonClass = 'btn btn-info';
    otherButtonClass = 'btn btn-outline-secondary';

    render() {

        const {onFilterClick, filter} = this.props;

        const filterChange = (filterName) => {
            this.setState({
                activeFilter: filterName
            });
            onFilterClick(filterName);
        };

        const buttonsToRender = this.buttons.map(({name, label}) => {
            const isActive = name === filter;
            const buttonClass = isActive ? this.activeButtonClass : this.otherButtonClass;
            return (
                <button type="button"
                       key={name}
                       className={buttonClass}
                       onClick={() => filterChange(name)}>
                   {label}
                </button>
           )
        });

        return (
            <div className="btn-group">
                {buttonsToRender}
            </div>
        );
    };
};