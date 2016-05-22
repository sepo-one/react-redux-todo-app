import React from 'react';

module.exports = React.createClass({
    render: function() {
        return (
            <li class="todo-item">
                <span class="todo-item-label">{this.props.item.label}</span>
            </li>
        )
    }
});
