(function(){

    var express = require('express');
    var router = express.Router();
    
    var getConfig = function(req, res) {
      res.json({ 
          env: process.env.NODE_ENV,
          weather: {
              location: "48.6373,2.3638"
          },
          mic: {
              username: "nicolass"
          },
          travelTime: {
              from: "48.64574959999999, 2.32624",
              to: "48.83225631713867, 2.2630059719085693"
          }
      });
    };
    
    router.get('/', getConfig);
    
    module.exports = router;
    
}());
