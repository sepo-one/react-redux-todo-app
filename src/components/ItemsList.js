import React from 'react';
import Item from './Item.js';

module.exports = React.createClass({
    render: function() {
        var toggleItem = this.props.toggleItem,
            filter = this.props.filter;
        return (
            <ul className="todo-items-list">
                {this.props.items.map(function(item, i){
                    return <Item
                        item={item}
                        key={i}
                        id={i}
                        toggleItem={toggleItem}
                        filter={filter}
                    />;
                })}
            </ul>
        )
    }
});
