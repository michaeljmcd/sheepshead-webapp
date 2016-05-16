var koa = require('koa'),
    koaStatic = require('koa-static'),
    winston = require('winston'),

    app = module.exports = koa();

app.on('error', function(error) {
    winston.error(error);
});

app.use(koaStatic(__dirname + '/static'));

if (!module.parent) {
    winston.info('starting up app');
    app.listen(5000);
}
