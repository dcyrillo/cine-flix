if (process.env.NODE_ENV == 'production') {
  module.exports = {
    mysqlURI:
      'mysql://bd6b1d23492d6e:a22a31a2@us-cdbr-iron-east-05.cleardb.net/heroku_e2295c01f3b6219?reconnect=true',
  };
} else {
  module.exports = { mysqlURI: 'myqsl://http://localhost:3000' };
}
