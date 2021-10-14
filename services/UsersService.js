const faker = require('faker');
//db
const User = require('../models/user')

class UsersService {
  constructor() {
    this.users = []
    this.usersDB = []
    this.generate()
    //TODO: Call the db data
  }

  generate() {
    const limit = 10
    for (let idx = 0; idx < limit; idx++) {
      this.users.push({
        email: faker.internet.email(),
        pswd: faker.internet.password()
      })
    }
  }

  register(email, pswd) {
    if (this.findOne(email) === undefined) {
      this.users.push({
        email: email,
        pswd: pswd
      })
      return true
    }

    return false
  }

  async registerUser(data) {
    const userDB = await User.find({ email: data.email })

    if (Object.keys(userDB).length === 0 /* empty object */) { // is not already registered in the DB
      const newUser = await User.create(data)
      return newUser
    }
    //already registered
    return {
      message: 'User already registered'
    }
  }

  async loginUser(data) {
    const userDB = await User.find({ email: data.email, pswd: data.pswd })

    if (Object.keys(userDB).length === 0 /* empty object */) {
      return {
        status: 'not logged',
        data
      }
    
    }

    return {
    status: 'logged in',
    data
    }
  }

  verifyLogin(email, pswd) {
    if (this.findOne(email)) {
      this.users.forEach(user => {
        if (user.email === email && user.pswd === pswd) {
          return true
        }
      })
    }
    return false
  }

  find() {
    return this.users
  }

  findOne(email) {
    return this.users.find(user => user.email === email)
  }

  updatePassword(email, oldPswd, newPswd) {
    if (this.findOne(email)) {
      let rc = -1
      this.users.forEach(user => {
        // email found
        if (user.email.localeCompare(email) === 0) {
          // password match
          if (user.pswd.localeCompare(oldPswd) === 0) {
            // new and old passwords are not the same
            if (oldPswd.localeCompare(newPswd) !== 0) {
              // updated
              user.pswd = newPswd
              rc = 0
            } else {
              // there's no change with the new password
              rc = 1
            }
          } else {
            // mismatch password
            rc = 2
          }
          return
        }
      })
      return rc
    } else {
      // email not found in list
      return 3
    }
  }
}

module.exports = UsersService
