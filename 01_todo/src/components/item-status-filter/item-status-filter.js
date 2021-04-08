import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

    state = {
        activeFilter: 'all'
    }

    allFilterName = 'all';
    activeFilterName = 'active';
    doneFilterName = 'done';

    activeButtonClass = 'btn btn-info';
    otherButtonClass = 'btn btn-outline-secondary';

    render() {

        const {onFilterClick} = this.props;
        const activeFilter = this.state.activeFilter;

        const filterChange = (filterName) => {
            this.setState({
                activeFilter: filterName
            });
            onFilterClick(filterName);
        };

        return (
            <div className="btn-group">
                <button type="button"
                        className={this.allFilterName === activeFilter
                                    ? this.activeButtonClass
                                    : this.otherButtonClass}
                        onClick={() => filterChange(this.allFilterName)}>
                    All
                </button>
                <button type="button"
                        className={this.activeFilterName === activeFilter
                                    ? this.activeButtonClass
                                    : this.otherButtonClass}
                        onClick={() => filterChange(this.activeFilterName)}>
                    Active
                </button>
                <button type="button"
                        className={this.doneFilterName === activeFilter
                                    ? this.activeButtonClass
                                    : this.otherButtonClass}
                        onClick={() => filterChange(this.doneFilterName)}>
                    Done
                </button>
            </div>
        );
    };
};