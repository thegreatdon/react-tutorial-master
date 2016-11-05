var MyComponent = React.createClass({
    render: function(){
        return (<h1>Hello, from tutorial.js</h1>);
    }
});

React.render(<MyComponent/>,document.getElementById('myDiv'));


var MyComponentProps = React.createClass({
    render: function(){
        return (<h1>Hello, {this.props.name}!</h1>);
    }
});

React.render(<MyComponentProps name="I am propname" />, document.getElementById('myDivProps'));