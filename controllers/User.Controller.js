const {User} = require("../models");

const UserGetAll = async (req, res) => {
  res.send("User GET All");
};

const UserGet = async (req, res) => {
  const Id = req.params.id;
  User.findById(Id, (err, User) => {
    if (err) {
      res.status(400).json(err);
    }

    res.json(User).status(200);
  });
};

const UserPost = async (req, res) => {
  const {username, email, password} = req.body;

  const user = new User({username, email, password});
  user.save((err, User) => {
    if (err) {
      return res.status(400).json({err});
    }
    res.json({User});
  });
};

module.exports = {
  UserGet,
  UserGetAll,
  UserPost,
};
