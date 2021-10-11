const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const { email, pswd } = req.query

  /* validating query params */
  if (email && pswd) {
    res.json({
      email,
      pswd
    })
  } else {
    res.send('Error validating params')
  }
})

module.exports = router;
