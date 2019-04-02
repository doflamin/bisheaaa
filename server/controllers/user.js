const user = require('../models/user.js')
//获取用户信息
const getUserInfo = async function (ctx) {
  const userInfoPromise = user.getUserByName([ctx.request.query.userName, ctx.request.query.pwd]);
  await userInfoPromise.then(res => {
    ctx.body = res
  })
}
//获取主页列表
const indexList = async function (ctx) {
  const getindexListPromise = user.getindexList([]);
  await getindexListPromise.then(res => {
    ctx.body = res
  })
}
//获取商家信息
const seller = async function (ctx) {
  const getsellerPromise = user.seller([ctx.request.query.id]);
  await getsellerPromise.then(res => {
    // ctx.body.code = 0
    let resObj = {}
    resObj.code = 0;
    resObj.data = res[0]
    ctx.body = resObj
  })
}
//获取一个商家里面的菜品
const goods = async function (ctx) {
  let goodsArr = await user.goods([])
  let foodsArr = []
  let tempArr = []
  const resObj = {}
  for (let i = 0; i < goodsArr.length; i++) {
    let arr = goodsArr[i].foods_id
    foodsArr.push(arr)
  }
  let resultArr = await Promise.all([...foodsArr.map(item => user.foods(item))])
  for (let i = 0; i < resultArr.length; i++) {
    tempArr.push({
      name: goodsArr[i].name,
      type: +goodsArr[i].goods_id,
      foods: resultArr[i],
    })
  }
  resObj.code = 0;
  resObj.data = tempArr
  ctx.body = resObj;
}
//获取文章列表
const findList = async function (ctx) {
  const getsellerPromise = user.findList([]);
  await getsellerPromise.then(res => {
    // ctx.body.code = 0
    let resObj = {}
    resObj.code = 0;
    resObj.data = res
    ctx.body = resObj
  })
}
//获取文章
const article = async function (ctx) {
  const getsellerPromise = user.article([ctx.request.query.find_id]);
  await getsellerPromise.then(res => {
    // ctx.body.code = 0
    let resObj = {}
    resObj.code = 0;
    resObj.data = res
    ctx.body = resObj
  })
}
//获取分类列表
const restaurantList = async function (ctx) {
  const getrestaurantListPromise = user.restaurantList([ctx.request.body.typeName]);
  await getrestaurantListPromise.then(res => {
    ctx.body = res
  })
}
//获取地址列表
const getAddress = async function (ctx) {
  const getAddressPromise = user.getAddress([ctx.request.query.userId]);
  await getAddressPromise.then(res => {
    ctx.body = res
  })
}
//在注册之前先查询用户名是否重复
const isExistence = async function (ctx) {
  const getisExistencePromise = user.getisExistence([ctx.request.query.userName]);
  await getisExistencePromise.then(res => {
    ctx.body = res
  })
}
//插入新的用户
const insertNewUser = async function (ctx) {
  const userInfoPromise = user.insertNewUser([ctx.request.body.userName, ctx.request.body.pwd, ctx.request.body.email]);
  await userInfoPromise.then(res => {
    ctx.body = res
  })
}
//插入新的地址
const addNewAdd = async function (ctx) {
  const addNewAddPromise = user.insertNewAdd([ctx.request.body.userId, ctx.request.body.address]);
  await addNewAddPromise.then(res => {
    ctx.body = res
  })
}
//插入新的文章
const addArticle = async function (ctx) {
  const addNewAddPromise = user.addArticle([ctx.request.body.title, ctx.request.body.desc,ctx.request.body.writerId]);
  await addNewAddPromise.then(res => {
    ctx.body = res
  })
}
//上传图片
const upload =  function () {
  // const getindexListPromise = user.getindexList([]);
  // await getindexListPromise.then(res => {
  //   ctx.body = res
  // })
  console.log(222)
}


//删除地址
const delAddress = async function (ctx) {
  const delAddressPromise = user.delAddress([ctx.request.body.add_id]);
  await delAddressPromise.then(res => {
    ctx.body = res
  })
}

//删除文章
const deleteArticle = async function (ctx) {
  const delAddressPromise = user.deleteArticle([ctx.request.body.find_id]);
  await delAddressPromise.then(res => {
    ctx.body = res
  })
}
//每访问一次文章,阅读数加一
const viewAdd = async function (ctx) {
  const delAddressPromise = user.viewAdd([ctx.request.body.view,ctx.request.body.find_id]);
  await delAddressPromise.then(res => {
    ctx.body = res
  })
}

module.exports = {
  getUserInfo,
  indexList,
  isExistence,
  insertNewUser,
  addNewAdd,
  getAddress,
  delAddress,
  restaurantList,
  seller,
  goods,
  findList,
  article,
  addArticle,
  upload,
  deleteArticle,
  viewAdd


}
