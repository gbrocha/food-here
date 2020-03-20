const Express = require('express');
const {User} = require('./Models')

const router = Express.Router()

router.get('/users',async (req,res)=>{
  const users = await User.findAll();
  return res.json(users)
})

module.exports = router