var mysql = require('mysql2');
let config = {
    host     : 'localhost',
    user     : 'root',
    password : '123',
    database : 'mydatabase',
    port:3306,
    multipleStatements: true//允许多条sql同时执行
};
let pool = mysql.createPool(config);
let query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.end()
        })
      }
    })
  })
};

module.exports = {
  query
}