import React from 'react';
import {filters} from './filters.js';

module.exports = React.createClass({
    getInitialState: function() {
        return {value: ''};
    },

    render: function() {
        var options = [
            {value: filters.ALL, label: "All"},
            {value: filters.DONE, label: "Done"},
            {value: filters.TODO, label: "Todo"},
        ];

        return (
            <div class="todo-vfilter">
                <span>Visibility:</span>
                &nbsp;
                <select value={this.props.filter} onChange={(e) => {this.props.changeVisibility(e.target.value)}}>
                    {options.map(function(o, i) {
                        return <option value={o.value} key={i}>
                            {o.label}
                        </option>;
                    })}
                </select>
            </div>
        )
    }
})
