module.exports = (req, res, next) => {
    return res.status(404).send({
        error: true,
        message: "Pagina No Encontrada"
    })
}