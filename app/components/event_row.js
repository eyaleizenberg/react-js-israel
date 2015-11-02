'use strict';

var React = require('react-native');
var { StyleSheet, View, Text, TouchableOpacity } = React;

var EventRow = React.createClass({
  render() {
    return(
      <TouchableOpacity onPress={() => this.props.onPress(this.props.event, this.props.eventNumber)}>
        <View style={styles.rowContainer}>
          <Text style={styles.header}>{this.props.event.name}</Text>
          <Text>{new Date(this.props.event.time).toString()}</Text>
        </View>
      </TouchableOpacity>
    );
  }
});

var styles = StyleSheet.create({
  rowContainer: {
    height: 70,
    borderBottomWidth: 1,
    borderColor: '#c1c1c1'
  },
  header: {
    fontWeight: "600"
  }
});

module.exports = EventRow;