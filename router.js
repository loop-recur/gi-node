var routes = require('./routes').routes,

    _findController = function(path) {
      var controller = path.split('/')[1];
      return controller ? controller : '/';
    },

    _findAction = function(path) {
      var action = path.split('/')[2];
      return action ? action : 'index';
    },

    _getRoute = function(path, cb) {
      cb(_findController(path), _findAction(path));
    },

    route = function(path, res, query) {
      _getRoute(path, function(controller, action) {
        if (routes[controller] && routes[controller][action]) { 
          routes[controller][action](res, query); 
        } else {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.end('404 Not Found');
        }
      });
    };

exports.route = route;

