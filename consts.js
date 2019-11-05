const Constant = {
    'apiDoor': 3000,
    'db': process.env.DB,
    'dbUser': process.env.DB_USER,
    'dbPassword': process.env.DB_PASSWORD,
    'dbParametros': {
        'host': process.env.DB_HOST,
        'port': process.env.DB_PORT,
        'dialect': 'mysql',
        'logging': false,
        'pool': {
            'max': 5,
            'min': 0,
            'idle': 100000,
            'acquire': 200000,
            'evict': 100000
        },
    },
    'bcryptKey': process.env.K_BCRYPT,
    'jwtKey': process.env.K_JWT,
    'jwtExpires': 600
}

module.exports = Constant;