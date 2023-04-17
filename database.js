// File: database.js

const db = {
    query: (sql) => {
        console.log('Executing SQL: ', sql);
        return {
            id: 1,
        }
    }
}

function createDatabaseConnection() {
    // create a database connection here
    return db;
}

module.exports = {
    createDatabaseConnection,
};
