const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    dialect: 'mariadb',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    define: {
      timestamps: true,
      undescored: true,
    },
  },
};
