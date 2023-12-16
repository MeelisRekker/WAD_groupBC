const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "par00l", //change to your local env
    database: "wad_groupbc",  //change to your local env
    host: "localhost",
    port: "5432"
});

const execute = async(query) => {
    try {
        await pool.connect(); // create a connection
        await pool.query(query); // executes a query
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

/* 
gen_random_uuid() A system function to generate a random Universally Unique IDentifier (UUID)
An example of generated uuid:  32165102-4866-4d2d-b90c-7a2fddbb6bc8
*/

// Create users table
const createUsersTableQuery = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );`;

execute(createUsersTableQuery).then(result => {
    if (result) {
        console.log('Table "users" is created');
    }
});

// Create posts table with foreign key to users

// userId uuid REFERENCES "users"(id) ON DELETE CASCADE,

const createPostsTableQuery = `
    CREATE TABLE IF NOT EXISTS "posts" (
        id serial PRIMARY KEY,
        body TEXT NOT NULL,
        date TIMESTAMP DEFAULT current_timestamp
    );`;

execute(createPostsTableQuery).then(result => {
    if (result) {
        console.log('Table "posts" is created');
    }
});

module.exports = pool;