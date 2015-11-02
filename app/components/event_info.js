'use strict';

var React = require('react-native');
var { StyleSheet, View, Text, TouchableOpacity, InteractionManager } = React;

var EventInfo = React.createClass({
  getInitialState() {
    return { loaded: false };
  },
  componentWillMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({loaded: true});
    });

  },

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.header}>{this.props.route.event.name}</Text>
        {this.renderSomethingHeavy()}
      </View>
    );
  },

  renderSomethingHeavy() {
    if (this.state.loaded) {
      return(
        <Text>React is awesome!</Text>
      )
    }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64
  },
  header: {
    fontWeight: '600'
  }
});

module.exports = EventInfo;