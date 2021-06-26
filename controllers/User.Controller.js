const { User } = require("../models");

// Obtener Todos Los Usuarios
const FindAll = async (req, res) => {
  await User.find({}).then((result) => {
    res.json({
      message: "success",
      data: result
    });
  });
};

// Obtener Un Solo Usurio Por ID
const FindById = async (req, res) => {
  const { id } = req.params;
  await User.findById(req.params.id, (err, resul) => {
    if (err) {
      res.status(400).json({
        message: "error",
        description: "User not found"
      });
    } else {
      res.status(200).json({
        message: "success",
        data: resul
      });
    }
  });
};

// Eliminar Un Usuario
const DeleteById = async (req, res) => {
  await User.findByIdAndRemove(req.params.id)
    .then((resul) => {
      res.json({
        message: "success",
        description: "User successfully deleted"
      });
    })
    .catch((err) => {
      res.json({
        message: "error",
        description: "There was a problem deleting the user"
      });
    });
};

// Exportador
module.exports = {
  FindById,
  FindAll,
  DeleteById
};
