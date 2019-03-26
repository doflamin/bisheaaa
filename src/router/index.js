import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 路由懒加载
const Index = (resolve) => {
  import('@/components/index/index').then((module) => {
    resolve(module)
  })
}
const Find = (resolve) => {
  import('@/components/find/find').then((module) => {
    resolve(module)
  })
}
const Order = (resolve) => {
  import('@/components/order/order').then((module) => {
    resolve(module)
  })
}
const Mine = (resolve) => {
  import('@/components/mine/mine').then((module) => {
    resolve(module)
  })
}
const RestaurantDetail = (resolve) => {
  import('@/components/index/restaurant-detail/restaurant-detail').then((module) => {
    resolve(module)
  })
}
const RestaurantList = (resolve) => {
  import('@/components/index/restaurant-list/restaurant-list').then((module) => {
    resolve(module)
  })
}
const Goods = (resolve) => {
  import('@/components/index/restaurant-detail/goods/goods').then((module) => {
    resolve(module)
  })
}
const Ratings = (resolve) => {
  import('@/components/index/restaurant-detail/ratings/ratings').then((module) => {
    resolve(module)
  })
}
const Seller = (resolve) => {
  import('@/components/index/restaurant-detail/seller/seller').then((module) => {
    resolve(module)
  })
}
const login = (resolve) => {
  import('@/components/login/login').then((module) => {
    resolve(module)
  })
}
const Address = (resolve) => {
  import('@/components/mine/address').then((module) => {
    resolve(module)
  })
}
const About = (resolve) => {
  import('@/components/mine/about').then((module) => {
    resolve(module)
  })
}
const Balance = (resolve) => {
  import('@/components/mine/balance').then((module) => {
    resolve(module)
  })
}
const Record = (resolve) => {
  import('@/components/mine/Record').then((module) => {
    resolve(module)
  })
}
const Collection = (resolve) => {
  import('@/components/mine/Collection').then((module) => {
    resolve(module)
  })
}


export default new Router({
  routes: [
    // 根路径
    {
      path: '/',
      redirect: '/index',
      component: Index
    },
    // 首页
    {
      path: '/index',
      component: Index
    },
    // 登录
    {
      path: '/login',
      component: login
    },
    // 商家列表
    {
      path: '/restaurant_list',
      component: RestaurantList
    },
    // 商家模块
    {
      path: '/restaurant',
      redirect: '/restaurant/goods',
      component: RestaurantDetail,
      children: [
        {
          path: 'goods',
          component: Goods
        },
        {
          path: 'ratings',
          component: Ratings
        },
        {
          path: 'seller',
          component: Seller
        }
      ]
    },
    // 发现
    {
      path: '/find',
      component: Find
    },
    // 订单
    {
      path: '/order',
      component: Order
    },
    //地址
    {
      path: '/address',
      component: Address
    },
    //关于
    {
      path: '/about',
      component: About
    },
    //余额
    {
      path: '/balance',
      component: Balance
    },
    //我的足迹
    {
      path: '/record',
      component: Record
    },
    //收藏
     {
      path: '/collection',
      component: Collection
    },
    // 我的
    {
      path: '/mine',
      component: Mine,
     
    }
  ]
})
