const router = require('express').Router();

const Users = require('./users-model.js');


router.get('/', (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ errorMessage: 'Something went wrong when attempting to fetch users'})
    })
});


router.post('/', (req, res) => {
    const userData = req.body;

    Users.add(userData)
    .then(user => {
        res.status(201).json(user);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ errorMessage: 'Something went wrong when attempting to add user' })
    })
})


router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Users.remove(id)
    .then(deleted => {
        if (deleted) {
            res.status(200).json(deleted);
        } else {
            res.status(404).json({ message: 'User with provided ID does not exist' });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ errorMessage: 'Something went wrong when attempting to remove user' });
    })
})





module.exports = router;