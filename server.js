var http = require('http'),

    url = require('url'),

    start = function(port, route) {
      http.createServer(function(req, res) {
        var query = url.parse(req.url, true).query,
            path = url.parse(req.url).pathname;

        route(path, res, query);
      }).listen(port);

      console.log('Server started on port ' + port);
    };

exports.start = start;

