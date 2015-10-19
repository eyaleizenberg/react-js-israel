var React = require('react-native');
var { StyleSheet, View, Text, TouchableOpacity } = React;

var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.leftButton]}>
          {previousRoute.title}
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {
    if (route.rightTitle) {
      return (
        <TouchableOpacity
          onPress={() => navigator.push(newRandomRoute())}
          style={styles.navBarRightButton}>
          <Text style={[styles.navBarText, styles.rightButton]}>
            Next
          </Text>
        </TouchableOpacity>
      );
    }
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title}
      </Text>
    );
  },

};

var styles = StyleSheet.create({
  navBarText: {
    color: 'white',
    fontSize: 18,
    marginTop: 12
  },
  leftButton: {
    marginLeft: 12
  },
  rightButton: {
    marginRight: 12
  },
});

module.exports = NavigationBarRouteMapper;