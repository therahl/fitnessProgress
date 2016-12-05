import https from 'https';
import fs from 'fs';

module.exports = app => {
  if (process.env.NODE_ENV !== 'test') {
    const credentials = {
      key: fs.readFileSync('ntask.key', 'utf8'),
      cert: fs.readFileSync('ntask.cert', 'utf8'),
    };
    app.db.sequelize.sync().done(() => {
      https.createServer(credentials, app)
        .listen(app.get('port'), () => {
          console.log(`NTask API - Port ${app.get('port')}`);
        });
    });
    app.db.sequelize.authenticate()
    .then(function(err) {
      console.log('Connection has been established successfully.');
    })
    .catch(function (err) {
      console.log('Unable to connect to the database:', err);
    });
  };
}
