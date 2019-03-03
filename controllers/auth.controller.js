const jwt = require('jsonwebtoken');
const User = require("../models/user.model");

module.exports = app => {
     app.get("/sign-up", (req, res) => {
        res.render("sign-up");
    });

    // SIGN UP POST
    app.post("/sign-up", (req, res) => {
        // Create User and JWT
        const user = new User(req.body);

        // Save the user to database
        user.save().then((user) => {
            var token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: "60 days" });
            res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
            res.redirect('/');
        })
        .catch(err => {
            console.log(err.message);
                return res.status(400).send({ err: err });
        });
    });
};