import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

    render () {

        const {onItemAdded} = this.props;
        const newLabel = 'Do homework!!!';

        return (
            <div className="item-add-form">
                <button type="button"
                        className="btn btn-outline-secondary float-right"
                        onClick={() => onItemAdded(newLabel)}>
                    Add Item
                </button>
            </div>
        )
    };
};