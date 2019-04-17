<!-- 商家列表页 -->

<template>
  <div class="restaurant-list">
    <header-bar @back="back"></header-bar>

    <seller-list-item v-for="item in restaurantList"
                      :key="item.name"
                      :data="item"
                      @toRestaurant="toRestaurant(item)"></seller-list-item>
  </div>
</template>

<script>
import SellerListItem from '@/components/base/seller-list-item/seller-list-item'
import HeaderBar from '@/components/base/header-bar/header-bar'

import axios from 'axios'

export default {
  components: {
    SellerListItem,
    HeaderBar
  },
  data () {
    return {
      restaurantList: []
    }
  },
  props: {},
  watch: {},
  methods: {
    _initRestaurantListData () {
      
      this.$http.post('/user/restaurantList',{
        typeName:+sessionStorage.getItem('typeName')
      })
      .then(res => {
          this.restaurantList = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    back () {
      this.$router.push({
        path: '/index'
      })
    },
    toRestaurant (item) {
      sessionStorage.setItem('sellerId',item.id)
      this.$router.push({
        path: '/restaurant'
      })
    }
  },
  filters: {},
  computed: {},
  created () {
    // 初始化列表数据
    this._initRestaurantListData()
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/const.scss';
@import '~@/assets/scss/mixin.scss';

.restaurant-list {
  background-color: #fff;
  margin-top: 42px;
}
</style>
