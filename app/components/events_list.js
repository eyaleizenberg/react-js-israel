'use strict';

var React = require('react-native');
var EventsStore = require('../stores/events_store');
var EventsActions = require('../actions/events_actions');
var EventRow = require('./event_row');
var EventInfo = require('./event_info');
var { StyleSheet, View, Text, ListView } = React;

var EventsList = React.createClass({
  getInitialState() {
    return {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      loaded: false
    }
  },

  componentDidMount() {
    EventsStore.addEventsReceivedListener(this.addEvents);
    EventsActions.fetchEvents();
  },

  componentWillUnmount() {
    EventsStore.removeEventsReceivedListener(this.addEvents);
  },

  addEvents() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(EventsStore.getEvents()),
      loaded: true
    });
  },

  render() {
    if (this.state.loaded) {
      return(
        <View style={styles.container}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
          />
        </View>
      );
    }
    else {
      return(
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    }
  },

  _renderRow(event, sectionId, rowId) {
    return(
      <EventRow event={event} onPress={this.navigateToEvent} eventNumber={this.getEventNumber(rowId)} />
    );
  },

  getEventNumber(rowId) {
    return this.state.dataSource._cachedRowCount - rowId;
  },

  navigateToEvent(event, eventNumber) {
    this.props.navigator.push({
      component: EventInfo,
      title: "Meetup #" + eventNumber,
      event: event
    });
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64
  },
  mainText: {
    fontSize: 20
  }
});

module.exports = EventsList;