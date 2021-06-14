const router = require('express').Router();
let User = require('../models/users.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/').post((req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    const age = Number(req.body.age);
    const date = Date.parse(req.body.age);
    const bio = req.bio.username;

    const newUser = new User({ username, name, age, date, bio });

    newUser.save()
        .then(() => res.json('New User created'))
        .catch(() => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(() => res.status(400).json('Error: ' + err));
});

router.route('/:id').post((req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    const age = Number(req.body.age);
    const date = Date.parse(req.body.age);
    const bio = req.bio.username;

    User.findByIdAndUpdate(req.params.id, { username: username, name: name, age: age, date: date, bio: bio })
        .then(user => res.json(user))
        .catch(() => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(user => res.json(user + "user deleted"))
        .catch(() => res.status(400).json('Error: ' + err));
});

module.exports = router;