import React from 'react';

module.exports = React.createClass({
  render: function() {
    var options = [
        {value: "all", label: "All"},
        {value: "done", label: "Done"},
        {value: "todo", label: "Todo"},
    ];

    return (
        <div class="todo-vfilter">
            <span>Visibility:</span>
            &nbsp;
            <select defaultValue="">
                {options.map(function(o, i) {
                    return <option value={o.value} key={i}>{o.label}</option>;
                })}
            </select>
        </div>
    )
  }
})
