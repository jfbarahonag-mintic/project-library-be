const express = require('express');

const UsersService = require('../services/UsersService')

const router = express.Router();

const service = new UsersService();

router.get('/', (req, res) => {
  const users = service.find();
  res.status(200).json(users)
})

router.get('/:email', (req, res) => {
  const { email } = req.body;
  console.log(email);
  const user = service.findOne(email)

  if (user) {
    res.status(200).json(user)
  } else {
    res.status(404).json({
      status: "Not found"
    })
  }
})

router.post('/', (req, res) => {
  const { email, pswd } = req.body

  if (service.register(email, pswd) === false) {
    // already in the list
    res.status(409).json({
      status: "Already exists"
    })
  } else {
    res.status(200).json({
      status: "OK"
    })
  }
})

router.patch('/new-pswd', (req, res) => {
  const { email, old_p, new_p } = req.body
  
  const rc = service.updatePassword(email, old_p, new_p)

  if (rc === 0) {
    res.status(200).json({
      status: "updated"
    })
  } else if (rc === 1) {
    res.status(400).json({
      status: "New password is equal to old password"
    })
  } else if (rc === 2) {
    res.status(401).json({
      status: "Password mismatch"
    })
  } else if (rc === 3) {
    res.status(404).json({
      status: "Email Not found"
    })
  }
})

module.exports = router;
