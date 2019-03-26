const env = process.env.WEB_ENV.trim();
const option = process.env.OPTION ? process.env.OPTION.trim() : "";
const webpackConfigFn = require(`./build/webpack.config.${env}.js`);
module.exports = webpackConfigFn(env, {
  option
});