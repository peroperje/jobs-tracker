const env = process.env.NODE_ENV || 'dev';

if (env === 'test' || env === 'dev') {
  const config = require('./config.json');
  const configEnv = config[env];
  Object.keys(configEnv).forEach((key)=>{
    process.env[key] = configEnv[key];
  });
}
