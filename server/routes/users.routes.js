/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const fakeState = require('../fakeDB/fakeUsers');
const onlineList = require('../fakeDB/onlineList');

router.get('/', async (req, res) => {
  try {

          const { user } = req.session;
    // await User.destroy({ where: { email: 'papa-loh@mail.ru' } });
    if (!user) {
      req.session.destroy();
      res.clearCookie('user_sid');
      return res.json({ user: null });
    }


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
