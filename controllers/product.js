Controllers.product = (function() {
  var products = require('../data/products').stub,

      show = function(res, query, path) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(products.json.Product));
      };

   return {show: show}

})();
