Controllers.dashboard = (function() {
  var shelves = require('../data/dashboard').stub,

      home = function(res, query) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(shelves.json.Dashboard.Shelves));
      };

   return {home: home}

})();
