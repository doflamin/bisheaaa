<!-- 我的 -->

<template>
  <div class="mine">
    <!-- 顶部头像和设置 -->
    <div class="top">
      <div class="info">
        <div class="avatar-wrapper">
          <img src="../../assets/img/lazyload.jpeg">
        </div>

        <div class="name-wrapper" @click="login">
          <span class="name">{{userType}}{{userName}}</span>

          <span class="desc">
            个人信息
            <i class="iconfont icon-more"></i>
          </span>
        </div>
      </div>

      <div class="operation">
        <i class="iconfont icon-huanfu"></i>
        <i class="iconfont icon-youjian"></i>
        <i class="iconfont icon-shezhi"></i>
      </div>
    </div>

    <!-- 横线分隔条 -->
    <cross-line></cross-line>

    <!-- 重要的栏目 -->
    <div class="important">
      
      <cross-item name="我的收藏" v-if="this.userType == '用户'?true:false">
        <i class="iconfont icon-shoucang1" @click="toCollection"></i>
      </cross-item>
      

      <cross-item name="收货地址" v-if="this.userType == '用户'?true:false">
        <i class="iconfont icon-dizhi" @click="toAddress"></i>
      </cross-item>

      <cross-item name="余额">
        <i class="iconfont icon-money" @click="toBalance"></i>
      </cross-item>

      <cross-item name="我的店铺" v-if="this.userType == '用户'?false:true">
        <i class="iconfont icon-money"  @click="toMyMall"></i>
      </cross-item>
    </div>

    <!-- 横线分隔条 -->
    <cross-line></cross-line>

    <!-- 次要的栏目 -->
    <div class="minor">
      <cross-item name="关于">
        <i class="iconfont icon-daohangguanyu" @click="toAbout"></i>
      </cross-item>
    </div>

    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/base/tab-bar/tab-bar";
import CrossLine from "@/components/base/cross-line/cross-line";
import CrossItem from "@/components/base/cross-item/cross-item";

export default {
  components: {
    TabBar,
    CrossLine,
    CrossItem
  },
  data() {
    return {
      userName: "登录",
      userType: "",
      
    };
  },
  props: {},
  watch: {},
  methods: {
    login() {
      this.$router.push({
        path: "/login"
      });
    },
    toCollection() {
      this.$router.push({
        path: "/collection"
      });
    },
    
    toAddress() {
      this.$router.push({
        path: "/address"
      });
    },
    toAbout() {
      this.$router.push({
        path: "/about"
      });
    },
    toBalance() {
      this.$router.push({
        path: "/balance"
      });
    },
    toMyMall(){
      this.$router.push({
        path: "/myMall"
      });
    }
  },
  filters: {},
  computed: {},
  created() {},
  mounted() {
    sessionStorage.getItem("userName")
      ? (this.userName = sessionStorage.getItem("userName"))
      : (this.userName = "登录");

    sessionStorage.getItem("userType")
      ? sessionStorage.getItem("userType") == 0
        ? (this.userType = "用户")
        : (this.userType = "商家")
      : (this.userType = "");
  },
  destroyed() {}
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/const.scss";
@import "~@/assets/scss/mixin.scss";

.mine {
  width: 100%;
  height: 100%;
  background-color: #ebebeb;
  .top {
    display: flex;
    position: relative;
    width: 100%;
    height: 120px;
    background-color: #06c1ae;
    .info {
      flex: 2;
      display: flex;
      flex-direction: row;
      margin-top: 40px;
      .avatar-wrapper {
        width: 70px;
        height: 70px;
        margin-left: 20px;
        img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
        }
      }
      .name-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 55px;
        margin-top: 10px;
        margin-left: 20px;
        .name {
          font-size: 16px;
          color: #fff;
          font-weight: bold;
        }
        .desc {
          font-size: 16px;
          color: #fcfefe;
          i {
            font-size: 18px;
          }
        }
      }
    }
    .operation {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      i {
        margin-top: 10px;
        margin-right: 15px;
        color: #fff;
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
  .important {
    width: 100%;
    background-color: #fff;
    .cross-item {
      &:last-child {
        border-bottom: none;
      }
    }
  }
  .minor {
    width: 100%;
    background-color: #fff;
    .cross-item {
      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
