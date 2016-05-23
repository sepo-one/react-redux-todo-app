import React from 'react';
import AddTodo from './AddTodo.js';
import ItemsList from './ItemsList.js';
import VisibilityFilter from './VisibilityFilter.js';

module.exports = React.createClass({
  render: function() {
    var items = [{label: "Test Item"}];
    return (
        <div class="todo-app">
            <AddTodo />
            <ItemsList items={items} />
            <VisibilityFilter />
        </div>
    )
  }
})
