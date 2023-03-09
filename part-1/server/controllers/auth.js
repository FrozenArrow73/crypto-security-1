const users = []
const bcryptjs = require("bcryptjs")

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body

      let salt = bcryptjs.genSaltSync()
      let passwordHash = bcryptjs.hashSync(password, salt)
      //bcrypt.compareSync(pin, chats[i].pinHash)
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && bcryptjs.compareSync(password, users[i].password)){
          //users[i].password === password) {
          let useri = {... users[i]}
          delete useri.password 
          res.status(200).send(useri)
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)
        users.push(req.body)

        let password = req.body.password
        let salt = bcryptjs.genSaltSync()
        let passwordHash = bcryptjs.hashSync(password, salt)
        
        req.body.password = passwordHash

        users.push(req.body)
        console.log(passwordHash)
        newUser = {... req.body}
        delete newUser.password

        res.status(200).send(newUser)


    }
}