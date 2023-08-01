const jwt = require('jsonwebtoken');
require('dotenv').config();


const authenticate = (req, res, next) => {
    try {
        // Recuperar el token
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            next({
                status: 401,
                errorName: 'No token provided',
                error: 'No token present in headers'
            })
        }

        //Verificar el token
        const decoded = jwt.verify(token, process.env.SECRET_WORD, {
            algorithms: 'HS512'
        })

        req.user = decoded;
        next();

    } catch (error) {
        next({
            status: 498,
            errorName: 'Invalid token',
            error
        })
    }

}

module.exports = authenticate;