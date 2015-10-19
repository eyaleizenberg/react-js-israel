'use strict';

var React = require('react-native');
var EventsStore = require('../stores/events_store')
var EventsActions = require('../actions/events_actions')
var { StyleSheet, View, Text } = React;

var EventsList = React.createClass({
  componentDidMount() {
    EventsStore.addEventsReceivedListener(this.addEvents);
    EventsActions.fetchEvents();
  },

  componentWillUnmount() {
    EventsStore.removeEventsReceivedListener(this.addEvents);
  },

  render: function() {
    return(
      <View style={styles.container}>
        <Text style={styles.mainText}>Hello!</Text>
      </View>
    );
  },

  addEvents() {
    EventsStore.getEvents();
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainText: {
    fontSize: 20
  }
});

module.exports = EventsList;