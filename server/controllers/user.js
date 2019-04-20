const user = require('../models/user.js')
//获取用户信息
const getUserInfo = async function (ctx) {
  const userInfoPromise = user.getUserByName([ctx.request.query.userName, ctx.request.query.pwd]);
  await userInfoPromise.then(res => {
    ctx.body = res
  })
}

//获取个人余额信息

const getMoney = async function (ctx) {
  const userInfoPromise = user.getMoney([ctx.request.query.userId]);
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
//获取用户列表
const getUserList = async function (ctx) {
  const getindexListPromise = user.getUserList([]);
  await getindexListPromise.then(res => {
    ctx.body = res
  })
}
//获取订单列表
const getOrderList = async function (ctx) {
  const getindexListPromise = user.getOrderList([]);
  await getindexListPromise.then(res => {
    ctx.body = res
  })
}
//获取菜单列表
const getFoodsList = async function (ctx) {
  const getindexListPromise = user.getFoodsList([]);
  await getindexListPromise.then(res => {
    ctx.body = res
  })
}
//获取地址列表
const getAdressList = async function (ctx) {
  const getindexListPromise = user.getAdressList([]);
  await getindexListPromise.then(res => {
    ctx.body = res
  })
}
//获取商家列表
const getSellerList = async function (ctx) {
  const getindexListPromise = user.getSellerList([]);
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
  let goodsArr = await user.goods([ctx.request.query.seller_id])
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
      type: +goodsArr[i].type,
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
//获取收藏列表
const getCollection = async function (ctx) {
  const getAddressPromise = user.getCollection([ctx.request.query.userId]);
  await getAddressPromise.then(res => {
    ctx.body = res
  })
}


//删除用户
const delUserById = async function (ctx) {
  const getAddressPromise = user.delUserById([ctx.request.body.userId]);
  await getAddressPromise.then(res => {
    ctx.body = res
  })
}
//删除地址
const delAddress = async function (ctx) {
  const getAddressPromise = user.delAddress([ctx.request.body.add_id]);
  await getAddressPromise.then(res => {
    ctx.body = res
  })
}
//删除订单
const delOrder = async function (ctx) {
  const getAddressPromise = user.delOrder([ctx.request.body.order_id]);
  await getAddressPromise.then(res => {
    ctx.body = res
  })
}

//删除菜品
const delFoods = async function (ctx) {
  const getAddressPromise = user.delFoods([ctx.request.body.foods_id]);
  await getAddressPromise.then(res => {
    ctx.body = res
  })
}
//删除商家
const delseller = async function (ctx) {
  const getAddressPromise = user.delseller([ctx.request.body.id]);
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
//注册新的用户
const insertNewUser = async function (ctx) {
  const userInfoPromise = user.insertNewUser([ctx.request.body.userName, ctx.request.body.pwd, ctx.request.body.email,ctx.request.body.type]);
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
//更新店铺信息
const addMyMail = async function (ctx) {
  const addNewAddPromise = user.addMyMail([
    ctx.request.body.name,
    ctx.request.body.type,
    ctx.request.body.price,
    ctx.request.body.fee,
    ctx.request.body.average,
    ctx.request.body.textarea,
    ctx.request.body.deliveryTime,
    ctx.request.body.ownerId,
    ctx.request.body.description,

    

    
  ]);
  await addNewAddPromise.then(res => {
    ctx.body = res
  })
}

//添加订单
const addNewOrder = async function (ctx) {
  const addNewAddPromise = user.addNewOrder([
    ctx.request.body.owner_id,
    ctx.request.body.seller_id,
    ctx.request.body.address_id,
    ctx.request.body.foods_id,
    ctx.request.body.totalPrice,

    
  ]);
  await addNewAddPromise.then(res => {
    ctx.body = res
  })
}
//添加用户
const addNewUser = async function (ctx) {
  const addNewAddPromise = user.addNewUser([
    ctx.request.body.userName,
    ctx.request.body.pwd,
    ctx.request.body.email,
    ctx.request.body.type,
    ctx.request.body.collection,
    ctx.request.body.money,   
  ]);
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



//设置个人余额
const setMoney = async function (ctx) {
  const delAddressPromise = user.setMoney([ctx.request.body.money,ctx.request.body.userId]);
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
//商家获取我的店铺信息
const getMyMail = async function (ctx) {
  const getsellerPromise = user.getMyMail([ctx.request.query.ownerId]);
  await getsellerPromise.then(res => {
    // ctx.body.code = 0
    let resObj = {}
    resObj.code = 0;
    resObj.data = res
    ctx.body = resObj
  })
}
//商家更新我的店铺信息
const findexList = async function (ctx) {
  const getsellerPromise = user.updateMyMail([
    ctx.request.body.name,
    ctx.request.body.type,
    ctx.request.body.price,
    ctx.request.body.fee,
    ctx.request.body.average,
    ctx.request.body.textarea,
    ctx.request.body.deliveryTime,
    ctx.request.body.ownerId,
    ctx.request.body.description,
    ctx.request.body.ownerId,
  ]);
  await getsellerPromise.then(res => {
    // ctx.body.code = 0
    let resObj = {}
    resObj.code = 0;
    resObj.data = res
    ctx.body = resObj
  })
}
//更新店铺信息
const updateMyMail = async function (ctx) {
  const getsellerPromise = user.updateMyMail([
    ctx.request.body.name,
    ctx.request.body.type,
    ctx.request.body.price,
    ctx.request.body.fee,
    ctx.request.body.average,
    ctx.request.body.textarea,
    ctx.request.body.deliveryTime,
    ctx.request.body.ownerId,
    ctx.request.body.description,
    ctx.request.body.ownerId,
  ]);
  await getsellerPromise.then(res => {
    // ctx.body.code = 0
    let resObj = {}
    resObj.code = 0;
    resObj.data = res
    ctx.body = resObj
  })
}
//删除收藏
const delCollection = async function (ctx) {
  const delAddressPromise = user.delCollection([ctx.request.body.newCol,ctx.request.body.user_id]);
  await delAddressPromise.then(res => {
    ctx.body = res
  })
}

//根据用户id获取用户订单信息
const getOrderByUserId = async function (ctx) {

  let goodsArr = await user.getOrderByUserId([ctx.request.query.userId])
  let foodsArr = []
  let seller = []
  let tempArr = []
  const resObj = {}
  for (let i = 0; i < goodsArr.length; i++) {
    let arr = goodsArr[i].foods_id
    let sel = goodsArr[i].seller_id
    foodsArr.push(arr)
    seller.push(sel)
  }
  let resultArr = await Promise.all([...foodsArr.map(item => user.foods(item))])
  let sellerArr = await Promise.all([...seller.map(seller => user.seller(seller))])
  
  
  for (let i = 0; i < resultArr.length; i++) {
    tempArr.push({
      order_id: goodsArr[i].order_id,
      price: goodsArr[i].price,

      seller_info: sellerArr[i],
      foods: resultArr[i],
    })
  }
  resObj.code = 0;
  resObj.data = tempArr
  ctx.body = resObj;

}

module.exports = {
  delseller,
  delFoods,
  getUserInfo,
  indexList,
  isExistence,
  insertNewUser,
  addNewAdd,
  getAddress,
  delOrder,
  delAddress,
  restaurantList,
  seller,
  goods,
  findList,
  article,
  addArticle,
  upload,
  deleteArticle,
  viewAdd,
  addMyMail,
  getMyMail,
  updateMyMail,
  getCollection,
  delCollection,
  getOrderByUserId,
  addNewUser,
  addNewOrder,
  getMoney,
  setMoney,
  getUserList,
  getOrderList,
  getFoodsList,
  getAdressList,
  getSellerList,
  delUserById


}
