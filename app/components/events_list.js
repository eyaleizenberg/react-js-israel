'use strict';

var React = require('react-native');
var EventsStore = require('../stores/events_store')
var EventsActions = require('../actions/events_actions')
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

  render() {
    if (this.state.loaded) {
      return(
        <View style={styles.container}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => this.renderRow(rowData)}
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

  addEvents() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(EventsStore.getEvents()),
      loaded: true
    });
  },

  renderRow(row) {
    return(
      <Text>{row.name}</Text>
    );
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