const { validationResult } = require("express-validator");
const { User } = require("../../models");
const jwt = require('jwt-simple')
const { JWT_SECRET } = require("../../config")
const moment = require('moment')

const Signup = async (req, res) => {

    const { username, email, password } = req.body;

    // Check Errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json({ errors: errors.array() });
    }

    const user = new User({ username, email, password });

    user.save()
        .then(user => {


            // Autentication
            const payload = {
                sub: user._id,
                iat: moment().unix(),
                exp: moment().add(8, 'hours').unix()

            };

            const token = jwt.encode(payload, JWT_SECRET);

            res.status(201).json({
                message: "success",
                description: "User added successfully",
                token: token,
                data: user
            });
        })
        .catch(err => {
            res.status(403).json({
                message: "error",
                description: "There was a problem adding the user",
                error: err
            });
        });
}

const Signin = async (req, res) => {
    res.json(req.body)
}

module.exports = {
    Signin,
    Signup
}