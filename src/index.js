const urljoin = require('url-join');

const route = require('koa-route');
const compose = require('koa-compose');

const defaultConfig = require('./config/default');

export default function wiki(options) {
  const settings = Object.assign(defaultConfig, options || {});
  const basePath = settings.basePath;
  const url = (path) => urljoin(basePath, path);

  return compose([
    route.get(url('test'), function *test() {
      console.log('test');
    })
  ]);
}
