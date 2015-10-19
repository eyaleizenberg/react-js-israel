'use strict';

var AppDispatcher = require('../dispatcher/app_dispatcher');
var AppConstants = require('../constants/app_constants');
var EventEmitter = require('events').EventEmitter;
var EVENTS_RECEIVED_EVENT = 'EVENTS_RECEIVED_EVENT';
var _ = require('lodash');
var events = {};

var EventsStore = _.assign({}, EventEmitter.prototype, {
  getEvents() {
    return events;
  },

  emitChange() {
    this.emit(EVENTS_RECEIVED_EVENT)
  },

  addEventsReceivedListener(callback) {
    this.on(EVENTS_RECEIVED_EVENT, callback);
  },

  removeEventsReceivedListener(callback) {
    this.removeListener(EVENTS_RECEIVED_EVENT, callback);
  }
});

AppDispatcher.register(function(payload) {
  if (payload.action.actionType == AppConstants.EVENTS_RECEIVED) {
    events = payload.action.response;
    EventsStore.emitChange();
  }

  return true;
});

module.exports = EventsStore;
