import logger from './logger.js';

module.exports = {
  database: 'fitnessprogress',
  username: 'kylehennessy',
  password: '',
  params: {
    dialect: 'postgres',
    // storage: 'ntask.postgres',
    logging: (sql) => {
      logger.info(`[${new Date()}] ${sql}`);
    },
    define: {
      underscored: true,
    },
  },
  jwtSecret: 'Nta$K-AP1',
  jwtSession: { session: false },
};
