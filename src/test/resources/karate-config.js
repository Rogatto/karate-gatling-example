function fn() {
  var env = karate.env; // get java system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev'; // a custom 'intelligent' default
  }
  var config = { // base config JSON
    clientId: '01a3de62-d33c-396b-a324-a4cf178917c2',
    authorization: 'Basic MDFhM2RlNjItZDMzYy0zOTZiLWEzMjQtYTRjZjE3ODkxN2MyOjZlNWYyMzM3LTlmYTUtM2Y0MC1iM2MyLWFhMjdiZmExYzI3OQ==',
    baseUrlBase: 'https://api-cateno.sensedia.com/dev/prepay/',
    versionUrlBase: 'v2/'
  };
  if (env == 'dev') {
    // over-ride only those that need to be
    config.baseUrlBase = 'https://api-cateno.sensedia.com/dev/prepay/' + config.versionUrlBase;
  } else if (env == 'hlg') {
    config.baseUrlBase = 'https://api-cateno.sensedia.com/hlg/prepay/' + config.versionUrlBase;
  }
  /*// don't waste time waiting for a connection or if servers don't respond within 5 seconds
  karate.configure('connectTimeout', 5000);
  karate.configure('readTimeout', 5000);*/
  return config;
}