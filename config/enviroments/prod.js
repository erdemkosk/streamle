const server = {
  port: process.env.PORT || 3000,
  clusterEnabled: process.env.CLUSTER_ENABLED || false,
};

module.exports = {
  env: 'prod',
  log: {
    level: process.env.LOG_LEVEL || 'info',
  },
  server,
  mongodb: {
    url: process.env.MONGODB_URL || '',
  },
  jwt: {
    key: process.env.JWT_KEY || 'testJwt',
    expires: process.env.JWT_EXPIRES || '3650d',
  },
};
