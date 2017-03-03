'use strict';
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db-sensor');

exports.sensorsGET = function(args, res, next) {
  /**
   * Product Types
   * permet de voir l'intervalle de temps des sensors 
   *
   * idSensor String idSensor
   * dateMin date date Intervalle
   * dateMax date date Intervalle
   * returns List
   **/
console.log("test");
    // schéma pour faire des requêtes via mongoose sur notre type de donnée "measure"
    try{
        var measureSchema  = mongoose.Schema(
            {
                sensor_id: String,
                date: Date,
                value: String
            },{collection:'measures'}
        );
        var measure = mongoose.model('measure',measureSchema);
    }catch(e){
        var measure = mongoose.model('measure');
    }

  measure
      .find()
      .where('date').lt(args.dateMax.value).gt(args.dateMin.value)
      .where('sensor_id').equals(args.idSensor.value)
      .exec(function (err, measures) {
      if (err) console.log("QueryError");
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(measures || {}));
  });
console.log(measure.find());
}

