const { postgraphile } = require('postgraphile')

const { DATABASE, PG_USER, PASSWORD, HOST, PG_PORT } = process.env

module.exports = postgraphile(
    {
        database: DATABASE,
        user: PG_USER,
        password: PASSWORD,
        host: HOST,
        port: PG_PORT,
        ssl: true
    },
    'd_mwsteasy',
    {
        watchPg: true,
        graphiql: true,
        enhanceGraphiql: true,
        
    }
)