const connection = require('../database/db')

//index
function index(req, res) {
    const sql = 'SELECT * FROM movies_db.movies';
    connection.query(sql, (err, results) => {
        console.log(results);
        if (err) return res.status(500).json({ error: true, message: err.message });
        res.json(results)
    })
}





module.exports = { index }

