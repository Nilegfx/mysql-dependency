const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'users-db', //note that we use service name not container_name
  user: 'root',
  password: 'example',
  database: 'mysql'
});

connection.connect();
const makeDBQuery = () => {
  connection.query('SELECT 1 + 1 AS solution', function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    console.log(`The solution is: ${results[0].solution}`);
  });
};

// run immediately
makeDBQuery();

// keep running it every one minute, just to keep
// the container up and running.
setInterval(makeDBQuery, 60000);
