const Pool = require("pg").Pool;

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "12345",
    database: "todos"
});

module.exports = pool;
