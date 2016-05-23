import React from 'react';

module.exports = React.createClass({
    render: function() {
        return (
            <li class="todo-item">
                <input
                    type="checkbox"
                    checked={this.props.item.done}
                    onChange={(e) => {this.props.toggleItem(this.props.id)}}
                />
                &nbsp;
                <span class="todo-item-label">{this.props.item.label}</span>
            </li>
        )
    }
});
