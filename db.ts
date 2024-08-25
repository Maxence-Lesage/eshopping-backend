const sql = require("mysql2");

const connection = sql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
});

connection.connect((err) => {
  if (err) console.log(err);
});

module.exports = connection;
