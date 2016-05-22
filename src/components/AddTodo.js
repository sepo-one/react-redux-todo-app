var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div class="todo-add">
                <input class="todo-add-input" defaultValue="Add Todo item..." />
                &nbsp;
                <span class="todo-add-btn">FIXME</span>
            </div>
        );
    }
});
