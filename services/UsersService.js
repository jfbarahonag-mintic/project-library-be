const faker = require('faker');

class UsersService {
  constructor() {
    this.users = []
    this.generate()
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
