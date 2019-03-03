const User = require("../models/user.model");

module.exports = app => {
    // SIGN UP POST
    app.post("/sign-up", (req, res) => {
        // Create User
        const user = new User(req.body);

        user
            .save()
            .then(user => {
                res.redirect("/");
            })
            .catch(err => {
                console.log(err.message);
            });
    });
};