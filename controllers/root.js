Controllers.root = (function() {

  var index = function(res, query) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Welcome!');
      };

  return {index: index};

})();

