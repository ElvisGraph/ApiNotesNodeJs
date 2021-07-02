const {JWT_SECRET} = require('../config')

function TokenValidate(req, res, next) {
    const TokenHeaders = req.headers['authorization']
    const Token = TokenHeaders && TokenHeaders.split(' ')[1]
    console.log(Token)

    next();
    
}