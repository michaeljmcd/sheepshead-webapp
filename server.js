var koa = require('koa'),
    koaStatic = require('koa-static'),
    winston = require('winston'),
    passport = require('passport'),
    config = require('config'),

    app = module.exports = koa(),
    
    port = config.get('server.port');

app.on('error', function(error) {
    winston.error(error);
});

app.use(koaStatic(__dirname + '/static'));

// Configure API gateway calls

//app.post('/login', passport

if (!module.parent) {
    winston.info('Starting up Sheepshead Web Application Instance on port %d', port);
    app.listen(port);
}
