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
router.get('/findList', user.findList)
router.get('/article', user.article)
router.get('/article', user.article)
router.get('/getMyMail', user.getMyMail)
router.get('/getCollection', user.getCollection)

router.get('/getOrderByUserId', user.getOrderByUserId)
router.get('/getMoney', user.getMoney)
router.get('/getUserList', user.getUserList)
router.get('/getOrderList', user.getOrderList)
router.get('/getFoodsList', user.getFoodsList)
router.get('/getAdressList', user.getAdressList)
router.get('/getSellerList', user.getSellerList)





router.post('/setCollection', user.setCollection)

router.post('/deleteArticle', user.deleteArticle)
router.post('/viewAdd', user.viewAdd)
router.post('/addNewUser', user.addNewUser)
router.post('/delUserById', user.delUserById)
router.post('/delAddress', user.delAddress)
router.post('/delOrder', user.delOrder)
router.post('/delFoods', user.delFoods)
router.post('/delseller', user.delseller)


router.post('/addArticle', user.addArticle)
router.post('/addMyMail', user.addMyMail)
router.post('/updateMyMail', user.updateMyMail)
router.post('/delCollection', user.delCollection)
router.post('/setMoney', user.setMoney)


router.post('/addNewOrder', user.addNewOrder)

router.post('/restaurantList', user.restaurantList)
router.post('/insertNewUser', user.insertNewUser)
router.post('/addNewAdd', user.addNewAdd)
router.post('/delAddress', user.delAddress)

// 上传
router.post('/uploadImg', user.uploadImg)

module.exports = router
