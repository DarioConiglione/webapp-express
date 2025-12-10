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

//show
function show(req, res) {
    const id = parseInt(req.params.id);
    const sql = 'SELECT * FROM movies WHERE id = ?'
    connection.query(sql, [id], (err, results) => {
        console.log(results);
        if (err) return res.status(500).json({ error: true, message: err.message })
        if (results.length === 0) return res.status(404).json({ error: `Non abbiamo questo film, attaccati a 'sto Netflix` })
        res.json(results)
    })
}





module.exports = { index, show }

