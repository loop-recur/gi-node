Controllers.product = (function() {
  var products = require('../data/products').stub
      find_products = require('../data/find_products').stub;

      show = function(res, query, path) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(products.json.Product));
      },

      search = function(res, query, path) {
        //var query = new RegExp(query.searchTitle),
        //results = [];
        /*for(var i=0, len=find_products.length; i < len; i++) {
          query.test(find_products[i].title) ? results.push(find_products[i]) : false
        }*/
        res.writeHead(200, {'Content-Type': 'application/json'});
        //res.end(JSON.stringify(results));
        res.end(JSON.stringify(find_products));
      };


   return {show: show, search: search}

})();
