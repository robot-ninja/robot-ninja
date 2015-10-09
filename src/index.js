const Router = require('koa-router');

const defaultConfig = require('./config/default');
const pagesRouter = require('./routes/pages');

export default function wiki(options) {
  const settings = Object.assign({}, defaultConfig, options || {});
  const basePath = settings.basePath;

  const router = new Router({
    prefix: basePath
  });
  router.get('/', function*() {
    this.body = "testtt";
  });
  router.get('/pages', pagesRouter.routes());
  console.log(basePath);

  return router.routes();
}

