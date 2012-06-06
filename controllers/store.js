Controllers.store = (function() {
  var find_by_address = require('../data/find_by_address').stub,

      find_by_location = require('../data/find_by_address').stub, 

      _queryResponse = function(query) {
        return query.lat ? find_by_location : find_by_address;
      },

      search = function(res, query) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(_queryResponse(query)));
      };

  return {search: search};

})();

