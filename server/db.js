const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'lewisheath',
    host: 'localhost',
    database: 'fullstacktodo',
    password: 'lewis',
    port: 5432,
});

module.exports = pool;