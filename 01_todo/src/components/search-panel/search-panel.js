import React, { Component } from 'react';
import './search-panel.css';


export default class SearchPanel extends Component{

    state = {
        searchText: ''
    }

    onSearchChange = (e) => {
        this.setState({
            searchText: e.target.value
        });
    };

    render () {
        const { onSearch } = this.props;

        const doSearch = (e) => {
            this.onSearchChange(e);
            onSearch(e.target.value);
        }

        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder='type to search'
                   onChange={doSearch}
                   value={this.state.searchText}/>
        );
    };
};