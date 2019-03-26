`use strict`
const user = require('../controllers/user')
const koaRouter = require('koa-router')
const router = koaRouter()
router.get('/userInfo', user.getUserInfo)
router.get('/indexList', user.indexList)
router.get('/isExistence', user.isExistence)
router.get('/getAddress', user.getAddress)
router.get('/seller', user.seller)
router.get('/goods', user.goods)



router.post('/restaurantList', user.restaurantList)
router.post('/insertNewUser', user.insertNewUser)
router.post('/addNewAdd', user.addNewAdd)
router.post('/delAddress', user.delAddress)

module.exports = router