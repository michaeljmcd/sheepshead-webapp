var koa = require('koa'),
    koaStatic = require('koa-static'),
    mount = require('koa-mount'),
    winston = require('winston'),
    passport = require('passport'),
    config = require('config'),

    app = module.exports = koa(),
    
    port = config.get('server.port');

app.on('error', function(error) {
    winston.error(error);
});

app.use(mount('/bower_components', koaStatic(__dirname + '/client/bower_components')));
app.use(mount('/bower_components', koaStatic(__dirname + '/client/build/bundled')));

// Configure API gateway calls

if (!module.parent) {
    winston.info('Starting up Sheepshead Web Application Instance on port %d', port);
    app.listen(port);
}
