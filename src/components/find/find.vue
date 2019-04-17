<!-- 发现 -->

<template>
  <div class="find">
    <Button  v-if="this.userType==0?false:true" long @click="addNewArticle"><Icon type="md-add" /></Button>
    <div v-for="(item,index) in findListData"  :key="index">
      <find-item :data="item" @_initFindListData="_initFindListData" ></find-item>

    </div>

    <tab-bar></tab-bar>
  </div>
</template>

<script>
import axios from 'axios'
import TabBar from '@/components/base/tab-bar/tab-bar'
import FindItem from '@/components/base/find-item/find-item'

export default {
  components: {
    TabBar,
    FindItem
  },
  data () {
    return {
      findListData: [],
      userType:0
    }
  },
  props: {},
  watch: {},
  methods: {
    _initFindListData () {
      // axios.get('/api/findList').then(res => {
      //   if (res.data.code === 0) {
      //     this.findListData = res.data.data.data
      //   }
      // }).catch(err => {
      //   console.log(err)
      // })
      this.$http.get('/user/findList').then(res => {
        if (res.data.code === 0) {
          this.findListData = res.data.data
        }
      }).catch(err => {
        console.log(err)
      })
    },
    
    addNewArticle(){
      this.$router.push('/addArticle')
    }
  },
  filters: {},
  computed: {},
  created () {
    this._initFindListData()
    // this.toFind()
  },
  mounted () {
    this.userType = +sessionStorage.getItem('userType')
  },
  destroyed () {}
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/const.scss';
@import '~@/assets/scss/mixin.scss';

.find {
  margin-bottom: 50px;
}
</style>
