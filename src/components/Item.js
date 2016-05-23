import React from 'react';

module.exports = React.createClass({
    render: function() {
        return (
            <li class="todo-item">
                <input type="checkbox" value={this.props.item.done} />
                &nbsp;
                <span class="todo-item-label">{this.props.item.label}</span>
            </li>
        )
    }
});
