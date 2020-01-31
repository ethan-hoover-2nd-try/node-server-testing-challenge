const db = require('../data/db-config');

module.exports = {
    find,
    add,
    remove
};

function find() {
    return db('users');
}


function add(user) {
    return db('users')
        .insert(user, 'id')
        .then(ids => {
            const [id] = ids;
            return db('users')
                .where({ id })
                .first();
        })
}


function remove(id) {
    let deletedUser = {};
    db('users')
    .where({ id })
    .first()
    .then(user => {
        deletedUser = user; 
    });
    return db('users')
        .where('id', id)
        .del()
        .then(count => {
            if (count > 0) {
                return deletedUser;
            }
        });

}