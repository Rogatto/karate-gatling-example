function fn() {
  var env = karate.env;
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = { // base config JSON
    baseUrl: 'http://api-demov3.sensedia.com/dev/fastmovie/',
    versionUrlBase: 'v1/'
  };
  if (env === 'dev') {
    config.baseUrl = 'http://api-demov3.sensedia.com/fastmovie/' + config.versionUrlBase;
  } else if (env === 'hlg') {
    config.baseUrlBase = 'http://api-demov3.sensedia.com/hlg/fastmovie/' + config.versionUrlBase;
  }
  /*// don't waste time waiting for a connection or if servers don't respond within 5 seconds
  karate.configure('connectTimeout', 5000);
  karate.configure('readTimeout', 5000);*/
  return config;
}