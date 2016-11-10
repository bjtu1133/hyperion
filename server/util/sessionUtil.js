"use strict"

let session = require('express-session');

module.exports = {
  getSession : ()=>{
    return session({
      secret : "keyboard cat",
      resave : true,
      saveUninitialized : true,
      cookie : {
        maxAge : 60000
      }
    });
  },
  authUserInfo : (req) => {
    let auth = {};
    auth.result = (req.session.userInfo)?true:false;
    auth.userInfo = req.session.userInfo;
    return auth;
  }
}
