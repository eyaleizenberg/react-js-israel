'use strict';

var React = require('react-native');
var App = require('./app/App');
var { AppRegistry } = React;

var reactjsisrael = React.createClass({
  render: function() {
    return (
      <App />
    );
  }
});

AppRegistry.registerComponent('reactjsisrael', () => reactjsisrael);
