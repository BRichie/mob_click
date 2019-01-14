const userQueries = require("../db/queries.users.js");
const passport = require("passport");

module.exports = {
    signUp(req, res, next){
      res.render("users/sign_up");
    },

    create(req, res, next){
      let newUser = {
        username: req.body.username,
        email: (req.body.email).toLowerCase(),
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
      };
 // #2
      userQueries.createUser(newUser, (err, user) => {
        if(err){
          req.flash("notice", "Email already associated with account");
          res.redirect("/users/sign_up");
        } else {
 

          passport.authenticate("local")(req, res, () => {
            req.flash("notice", "You've successfully signed in!");
            res.redirect("/");
          })
        }
      });
    },
    
    signInForm(req, res, next){
        res.render("users/sign_in");
      },

      signIn(req, res, next){
        passport.authenticate("local")(req, res, function () {
          if(!req.user){
            req.flash("notice", "Sign in failed. Please try again.")
            res.redirect("/users/sign_in");
          } else {
            req.flash("notice", "You've successfully signed in!");
            res.redirect("/");
          }
        })
      },
    
   

           signOut(req, res, next){
            req.logout();
            req.flash("notice", "You are signed out!");
            res.redirect("/");
          },
      
  }