const router = require('express').Router()
const rooterUser = require('./router_user')

router.get('/', (req, res) => {
    res.send('Silahkan ganti ke api/v1/users')
})
router.use('/api/v1', rooterUser)

module.exports = router