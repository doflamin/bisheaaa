const db = require('../config/db.js')
const getUserByName = async function (name) {
	const sql = `select * from user_info where userName = ? AND pwd = ?`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}
const getMoney = async function (name) {
	const sql = `select money from user_info where userId = ?`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}

const getUserList = async function (name) {
	const sql = `select * from user_info`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}
const getAdressList = async function (name) {
	const sql = `select * from add_info`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}


const getOrderList = async function (name) {
	const sql = `select * from order_info`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}
const getFoodsList = async function (name) {
	const sql = `select * from foods_info`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}


const getindexList = async function (name) {
	const sql = `select * from seller_info`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}
const getSellerList = async function (name) {
	const sql = `select * from seller_info`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}

const restaurantList = async function (name) {
	const sql = `SELECT * FROM mydatabase.seller_info WHERE types LIKE '%?%'`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}

const seller = async function (name) {
	const sql = `SELECT * FROM mydatabase.seller_info WHERE id = ?`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}

const findList = async function (name) {
	const sql = `SELECT * FROM mydatabase.find_info`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}
const article = async function (name) {
	const sql = `SELECT * FROM mydatabase.find_info where find_id = ?`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}
const goods = async function (name) {
	const sql = `SELECT * FROM mydatabase.goods_info where find_in_set(goods_id, (SELECT goods_id from mydatabase.seller_info where id = ?))`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}

const foods = async function (name) {
	const sql = `SELECT * FROM mydatabase.foods_info where find_in_set(foods_id,?)`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {

      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}
const getOrderByUserId = async function (name) {
	const sql = `SELECT * FROM mydatabase.order_info where owner_id = ?`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {

      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}

const setCollection = async function (name) {
 
  
	const sql = `update  user_info SET collection = ? where userId = ? `

  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {

      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}


const getAddress = async function (name) {
	const sql = `select * from add_info where user_id = ?`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}
const getCollection = async function (name) {
	const sql = `SELECT * FROM mydatabase.seller_info where find_in_set(id,(select collection from mydatabase.user_info where userId = ?))`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}

const getisExistence = async function (name) {
	const sql = `select * from user_info where userName = ?`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}
const insertNewUser = async function (name) {
	const sql = `insert into user_info (userName,pwd,email,type) values (?,?,?,?)`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}

const insertNewAdd = async function (name) {
	const sql = `insert into add_info (user_id,address) values (?,?)`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}
const addArticle = async function (name) {
  const sql = `insert into find_info (bizType,title,body,writer_id,view, img) values (1,?,?,?,0,?)`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}

const delAddress = async function (name) {
	const sql = `delete from add_info where add_id = ? `
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}

const deleteArticle = async function (name) {
	const sql = `delete from find_info where find_id = ? `
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}
const viewAdd = async function (name) {
	const sql = `update  find_info SET view = ? where find_id = ? `
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}

const delCollection = async function (name) {
	const sql = `update  user_info SET collection = ? where userId = ? `
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}
const setMoney = async function (name) {
	const sql = `update  user_info SET money = ? where userId = ? `
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}


const addMyMail = async function (name) {
	const sql = `INSERT INTO mydatabase.seller_info (
    name,
    types,
    min_price_tip,
    shipping_fee_tip,
    average_price_tip,
    infos,
    avg_delivery_time,
    owner_id,
    description,
    icon_url,
    info,
    bulletin,
    pic_url,
    distance
    ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?);`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}

const addNewOrder = async function (name) {
	const sql = `INSERT INTO mydatabase.order_info (
    owner_id,
    seller_id,
    address_id,
    foods_id,
    price,
    msg
    ) VALUES (?,?,?,?,?,?);`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}
const addNewUser = async function (name) {
	const sql = `INSERT INTO mydatabase.user_info (
    userName,
    pwd,
    email,
    type,
    collection,
    money
    ) VALUES (?,?,?,?,?,?);`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })



}
const addGoods = async function (name) {
	const sql = `INSERT INTO mydatabase.goods_info (
    name,
    owner_id,
    type,
    foods_id
    ) VALUES (?,?,-1,?);`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}
const addFoods = async function (name) {
	const sql = `INSERT INTO mydatabase.foods_info (name,owner_id,sellCount,price,image,description,rating,icon) VALUES (?,?,0,?,?,?,0,?);`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}




const getMyMail = async function (name) {
	const sql = `SELECT * FROM mydatabase.seller_info where owner_id = ?`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}

const getSellerMoneyByOwnerId = async function (name) {
	const sql = `SELECT money FROM mydatabase.user_info where userId = ?`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}


const updateMyMail = async function (name) {
  const sql = `UPDATE mydatabase.seller_info SET
  name=?,
  types=?,
  min_price_tip=?,
  shipping_fee_tip=?,
  average_price_tip=?,
  infos=?,
  avg_delivery_time=?,
  description=?,
  icon_url=?,
  info=?,
  bulletin = ? WHERE owner_id=?;`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}

const updateGoodsofSeller = async function (name) {
  const sql = `UPDATE mydatabase.seller_info SET goods_id=? WHERE id=?;`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}
const updateFoodsofSeller = async function (name) {
  const sql = `UPDATE mydatabase.goods_info SET foods_id=? WHERE goods_id=?;`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}

const delUserById = async function (name) {
	const sql = `DELETE FROM mydatabase.user_info WHERE userId=?  `
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}

const delOrder = async function (name) {
	const sql = `DELETE FROM mydatabase.order_info WHERE order_id=?  `
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}

const delFoods = async function (name) {
	const sql = `DELETE FROM mydatabase.foods_info WHERE foods_id=?  `
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}



const delseller = async function (name) {
	const sql = `DELETE FROM mydatabase.seller_info WHERE id=?  `
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}


const deleteGoods = async function (name) {
	const sql = `DELETE FROM mydatabase.goods_info WHERE goods_id=?  `
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}
module.exports = {
  delseller,
  delFoods,
  getSellerMoneyByOwnerId,
  deleteGoods,
  delOrder,
  delUserById,
  getUserByName,
  getindexList,
  getisExistence,
  setCollection,
  insertNewUser,
  insertNewAdd,
  getAddress,
  updateFoodsofSeller,
  updateGoodsofSeller,
  delAddress,
  restaurantList,
  seller,
  goods,
  foods,
  addFoods,
  findList,
  addGoods,
  article,
  addArticle,
  deleteArticle,
  viewAdd,
  addMyMail,
  getMyMail,
  updateMyMail,
  getCollection,
  delCollection,
  getOrderByUserId,
  addNewOrder,
  getMoney,
  setMoney,
  getUserList,
  getOrderList,
  getFoodsList,
  getAdressList,
  getSellerList,
  addNewUser
}
