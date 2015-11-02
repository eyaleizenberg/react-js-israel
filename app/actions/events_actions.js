'use strict';

var AppDispatcher = require('../dispatcher/app_dispatcher');
var AppConstants = require('../constants/app_constants');
var Routes = require('../modules/routes');
var Api = require('../modules/api');

var EventsActions = {
  fetchEvents() {
    return Api.begin({
      path: Routes.eventsPath(),
      method: 'get',
      success: function(response) {
        return AppDispatcher.handleServerAction({
          actionType: AppConstants.EVENTS_RECEIVED,
          response: response.results
        });
      }
    });
  }
};

module.exports = EventsActions;
