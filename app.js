const route = require('./server/route/index')
const koa = require('koa');
const koaRouter = require('koa-router');
const json = require('koa-json');
const logger = require('koa-logger');
const serve = require('koa-static');
const path = require('path');
const koa2HistoryApiFallback = require('koa2-history-api-fallback');
const cors = require('koa2-cors');

const app = new koa();
app.use(cors())
const router = new koaRouter();

app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(function* (next){
  let start = new Date;
  yield next;
  let ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.on('error', function(err, ctx){
  console.log('server error', err);
});

router.use('/user', route.routes())

app.use(router.routes())
app.use(koa2HistoryApiFallback())
app.use(serve(path.resolve('dist')))

app.listen(8002, () => {
  console.log('Koa is listening in 8002');
});

module.exports = app;