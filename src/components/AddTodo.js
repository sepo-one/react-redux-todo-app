var React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
        return {value: ''};
    },

    handleKeyPress: function(e) {
        if (e.key == 'Enter') {
            this.props.addItem(this.state.value);
        }
    },

    render: function() {
        return (
            <div class="todo-add">
                <input
                    class="todo-add-input"
                    placeholder="Add Todo item..."
                    value={this.state.value}
                    onChange={(e) => {this.setState({value: e.target.value})}}
                    onKeyPress={this.handleKeyPress}
                />
            </div>
        );
    }
});
