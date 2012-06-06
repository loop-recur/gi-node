Controllers = {};
require('./controllers/root');
require('./controllers/store');

var server = require('./server'),
    router = require('./router');

server.start(4000, router.route);

