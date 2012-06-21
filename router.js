var routes = require('./routes').routes,

    _findController = function(path) {
      var controller = path.split('/')[1];
      return controller ? controller : '/';
    },

    _checkForId = function(action) {
      if(action) return (action.match(/com\-\d*$/i)) ? ':id' : action;
    },

    _findAction = function(path) {
      var action = _checkForId(path.split('/')[2]);
      return action ? action : 'index';
    },

    _getRoute = function(path, cb) {
      cb(_findController(path), _findAction(path));
    },

    route = function(path, res, query) {
			path = path.replace(/\.\w+?$/, '');
      _getRoute(path, function(controller, action) {
        if (routes[controller] && routes[controller][action]) { 
          routes[controller][action](res, query, path); 
        } else {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.end('404 Not Found');
        }
      });
    };

exports.route = route;

