function notFound(req, res, next) {
    return res.status(404).json({
        error: true,
        message: "file not found"
    })

}

module.exports = notFound