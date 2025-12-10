const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root',
    database: 'movies_db'
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Connesso al mio mySQL!');
});

module.exports = connection;