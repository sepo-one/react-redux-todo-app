import React from 'react';
import AddTodo from './AddTodo.js';
import ItemsList from './ItemsList.js';
import VisibilityFilter from './VisibilityFilter.js';
import {filters} from './filters.js';

module.exports = React.createClass({
    getInitialState: function() {
        return {
            items: [],
            visibility: filters.DONE
        };
    },

    addItem: function(text) {
        var items = this.state.items;
        items.push({label: text, done: false});
        this.setState(items);
    },

    changeVisibility: function(filter) {
        this.setState({visibility: filter});
    },

    render: function() {
        return (
            <div class="todo-app">
                <AddTodo addItem={this.addItem} />
                <ItemsList items={this.state.items} />
                <VisibilityFilter
                    filter={this.state.visibility}
                    changeVisibility={this.changeVisibility}
                />
            </div>
        )
    }
})
