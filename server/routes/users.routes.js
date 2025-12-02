/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
const {
  User, Message
} = require('../db/models');
const router = require('express').Router();
const bcrypt = require('bcrypt');
const fakeState = require('../fakeDB/fakeUsers');
const onlineList = require('../fakeDB/onlineList');
const { where, json } = require('sequelize');




// router.get('/', async (req, res) => {
//   try {
//    // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//      const id = 0;

//      const user = await User.findOne({ where: { id: 1, name: "Papa" } });
//    //  console.log(user);
//      return res.json({ user });


//   } catch (error) {

//   }
// });

router.get('/', async (req, res) => {
  try {

      const { user } = req.session;
    
    if (!user) {
      req.session.destroy();
      res.clearCookie('user_sid');
      return res.json({ user: null });
    }

     return res,json(user);


  } catch (error) {
     return res.json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const { name } = req.body;
  const user = fakeState.find((fakeUser) => fakeUser.name === name); // scan in DB!
  if (user) {
    return res.json(user);
  }
  return res.json({ message: 'No user !' });
});

module.exports = router;
