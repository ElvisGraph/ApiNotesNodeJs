const { validationResult } = require("express-validator");
const { User } = require("../../models");

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
            res.status(201).json({
                message: "success",
                description: "User added successfully",
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