const bcrypt = require("bcryptjs");
const userController = require("../user/controller");
const jwt = require('jsonwebtoken');
let config = require("../../../config.json");

const login = ({ username, password }) =>
  new Promise((resolve, reject) => {
    userController
      .getUserForAuth(username)
      .then(user => {
        if (!user || !user.password) {
          reject({
            status: 403,
            message: "Incorrect username"
          });
        } else {
          bcrypt
            .compare(password, user.password)
            .then(result => {
              if (result) {
                let token = jwt.sign({username: username},
                  config.secret,
                  { expiresIn: '10000h' // expires in 10000 hours
                  }
                );
                resolve({ 
                  status : 200,
                  data : {
                    username: user.username, 
                    role: 'ADMIN', 
                    token: token 
                  },
                  message: 'Authentication successful!'
                });
              } else {
                reject({
                  status: 403,
                  message: "Incorrect password"
                });
              }
            })
            .catch(err =>
              reject({
                status: 400,
                message: 'Authentication failed! Please check the request'
              })
            );
        }
      })
      .catch(err =>
        reject({
          status: 400,
          message: 'Authentication failed! Please check the request'
        })
      );
  });

module.exports = {
  login
};