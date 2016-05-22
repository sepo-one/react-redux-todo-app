import React from 'react';
import Item from './Item.js';

module.exports = React.createClass({
    render: function() {
        return (
            <ul class="todo-items-list">
                {this.props.items.map(function(item, i){
                    return <Item item={item} key={i} />;
                })}
            </ul>
        )
    }
});
