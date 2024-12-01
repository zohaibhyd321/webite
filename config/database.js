const path = require('path');


module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'mysql.railway.internal'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'railway'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'FOmNVBdvAJdFYxVCZrTNAUPIuZgEIFMr'),
          ssl: false, 
    },
  },
});
