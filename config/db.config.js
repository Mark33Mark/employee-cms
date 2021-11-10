
// Using MySQL2's support for the Promise API for queries
// to be called asynchronously.
const mysql  = require( "mysql2/promise" );
const db     = mysql.createConnection(
    {
        host:     process.env.HOST,
        user:     process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    },
    console.log( `Connected to the ${process.env.DATABASE} database.` )
    );

    module.exports = db;