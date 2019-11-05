const jwt = require('jsonwebtoken');
const Constants = require('../../consts');

module.exports = {
    checkToken: function(req, res, next) {
        const token = req.headers.e_token;

        console.log(jwt.decode(token,Constants.jwtKey));

        if (!token) return res.status(401).json({'msg': 'Token not found'});

        jwt.verify(token,Constants.jwtKey,(err,decoded) => {
            if (err || !decoded)
                return res.status(401).json({'msg': 'Wrong Token!'});
            
            next();
        })
    }
}