const User = require("../models/user.model");
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

module.exports = app => {
     app.get("/sign-up", (req, res) => {
        res.render("sign-up");
    });

    // SIGN UP POST
    app.post("/sign-up", [
        // username must be email
        check('username').isEmail(),
        check('password').isLength({min: 6}).withMessage('must be at least 5 chars long')
                        .matches(/\d/).withMessage('must contain a number')
        ], (req, res) => {
        
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array()
            });
        }
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
                return res.status(400).send({ err: err.message });
        });
    });

    // LOGOUT
    app.get('/logout', (req, res) => {
        console.log("logout")
        res.clearCookie('nToken');
        res.redirect('/');
    });

    // LOGIN FORM
    app.get('/login', (req, res) => {
        res.render('login');
    });


    // LOGIN
    app.post("/login", (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        // Find this user name
        User.findOne({ username }, "username password")
            .then(user => {
                if (!user) {
                    // User not found
                    return res.status(401).send({ message: "Wrong Username or Password" });
                }
                // Check the password
                user.comparePassword(password, (err, isMatch) => {
                    if (!isMatch) {
                        // Password does not match
                        return res.status(401).send({ message: "Wrong Username or password" });
                    }
                    // Create a token
                    const token = jwt.sign({ _id: user._id, username: user.username }, process.env.SECRET, {
                        expiresIn: "60 days"
                    });
                    // Set a cookie and redirect to root
                    res.cookie("nToken", token, { maxAge: 900000, httpOnly: true });
                    res.redirect("/");
                });
            })
        .catch(err => {
            console.log(err);
        });
    });

};