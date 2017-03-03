'use strict';

var url = require('url');

var Sensors = require('./SensorsService');

module.exports.sensorsGET = function sensorsGET (req, res, next) {
  Sensors.sensorsGET(req.swagger.params, res, next);
};
