var Dispatcher = require('flux').Dispatcher;
var _ = require('lodash');

AppDispatcher = _.assign(new Dispatcher, {
  handleViewAction: function(action) {
    return this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  },
  handleServerAction: function(action) {
    return this.dispatch({
      source: 'SERVER_ACTION',
      action: action
    });
  }
});

module.exports = AppDispatcher;
