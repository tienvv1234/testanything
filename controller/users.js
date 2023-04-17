function createUsersController(db) {
    function getUsers() {
        // retrieve users from the database
        console.log('get user db: ', db)
        const users = db.query('SELECT * FROM users');
        return users;
    }

    return {
        getUsers,
    };
}

module.exports = {
    createUsersController,
};
