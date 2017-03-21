var users = [{
        name: 'p',
        password: 'p',
        friends: ['Lindsey Mayer', 'Terri Ruff']
    },
    {
        name: 'Ryan Rasmussen',
        password: '$akgfl#',
        friends: ['Lindsey Mayer']
    },
    {
        name: 'Terri Ruff',
        password: 'hunter2',
        friends: ['Lindsey Mayer', 'Preston McNeil']
    },
    {
        name: 'Lindsey Mayer',
        password: '777mittens777',
        friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
    }
];

module.exports = {
    login(req, res) {
        for (var i = 0; i < users.length; i++) {
            if (req.body.name == users[i].name && req.body.password == users[i].password) {
                req.session.currentUser = users[i]
                res.send({
                    userFound: true,
                    user: req.body
                })
                return;
            }
        }
        res.send({
            userFound: false
        })
    }
}
