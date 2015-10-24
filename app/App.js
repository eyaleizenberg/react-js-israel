'use strict';

var React = require('react-native');
var EventsList = require('./components/events_list');
var NavigationBarRouteMapper = require('./modules/navigation_route_mapper')
var { StyleSheet, View, Text, StatusBarIOS, Navigator } = React;

var App = React.createClass({
  componentWillMount: function() {
    StatusBarIOS.setStyle(1)
  },

  render: function() {
    return (
      <Navigator
        ref="nav"
        renderScene={this.renderScene}
        initialRoute={this.renderContent()}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />
        }
      />
    );
  },

  renderScene(route, navigator) {
    var Component = route.component

    return(
      <View style={styles.container}>
        <Component navigator={navigator} route={route} />
      </View>
    );
  },

  renderContent() {
    return {
      component: EventsList,
      title: "Our Events"
    }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navBar: {
    backgroundColor: "#0069d5",
  }
});

module.exports = App;
