const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;


var jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    nom: req.body.nom,
    prenom: req.body.prenom,
    login: req.body.login,
    password: req.body.password,
    poste_id: req.body.poste_id,
    audit_id: req.body.audit_id
  }).catch(err => {
      const messager = "I don't creat your account."; 
      res.status(500).send({ message: messager, err: errr.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      login: req.body.login
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = (req.body.password == user.password) ? true : false;
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
        res.status(200).send({
          id: user.id,
          nom: user.nom,
          prenom: user.prenom,
          login: user.login,
          password: user.password,
          accessToken: token
        });
    })
    .catch(err => {
      let message = "your login is not found"
      res.status(500).send({ message: message, err: err.message});
    });
};
