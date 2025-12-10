const express = require('express');
const app = express();
const port = 3000;
const moviesRouter = require('./routers/movies');
const connection = require('./database/db')


app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send('Daje server!')
});

app.use('/movies', moviesRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});