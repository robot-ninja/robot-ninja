const Router = require('koa-router');

const router = new Router();
export default router;

router.get('/', function *() {
  this.body = "hellooooo";
});

