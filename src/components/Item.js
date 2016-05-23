import React from 'react';
import {filters} from './filters.js';
import classNames from 'classnames';

module.exports = React.createClass({
    render: function() {
        var classMap = classNames({
            'todo-item': true,
            'item-done': this.props.item.done,
            'item-hide': (this.props.filter != filters.ALL && this.props.item.done != this.props.filter)
        });
        return (
            <li className={classMap}>
                <input
                    type="checkbox"
                    checked={this.props.item.done}
                    onChange={(e) => {this.props.toggleItem(this.props.id)}}
                />
                &nbsp;
                <span className="todo-item-label">{this.props.item.label}</span>
            </li>
        )
    }
});
