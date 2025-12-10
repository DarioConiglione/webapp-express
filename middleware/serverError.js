function serverError(err, req, res, next) {
    if (err) {
        console.log(err.stack);
        return res.status(500).json({
            error: true,
            messsage: err.messsage
        })
    }
}

module.exports = serverError