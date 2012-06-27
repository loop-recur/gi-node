Controllers = {};
require('./controllers/root');
require('./controllers/store');
require('./controllers/product');
require('./controllers/dashboard');

var server = require('./server'),
    router = require('./router');

server.start((process.env.PORT || 4000), router.route);
