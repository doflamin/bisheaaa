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
const goods = async function (name) {
	const sql = `SELECT * FROM mydatabase.goods_info`
  return new Promise((resolve, reject) => {
    db.query(sql, name).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    });
  })
}

const foods = async function (name) {
	const sql = `SELECT * FROM mydatabase.foods_info where foods_id = ?`
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
	const sql = `insert into user_info (userName,pwd,email) values (?,?,?)`
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


module.exports = {
  getUserByName,
  getindexList,
  getisExistence,
  insertNewUser,
  insertNewAdd,
  getAddress,
  delAddress,
  restaurantList,
  seller,
  goods,
  foods
}
