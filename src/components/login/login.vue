<!-- 登录 组件 -->

<template>
  <div class="login">
    <header-bar text="登录注册页" @back="back"></header-bar>

    <mt-navbar v-model="selected">
      <mt-tab-item id="1">登录</mt-tab-item>
      <mt-tab-item id="2">注册</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <!-- 登录 -->
      <mt-tab-container-item id="1" class="login-wrapper">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="login_username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="login_password"></mt-field>

        <mt-button type="primary" size="large" @click.native="login">登录</mt-button>
      </mt-tab-container-item>

      <!-- 注册 -->
      <mt-tab-container-item id="2" class="register-wrapper">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="register_username"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="register_email"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="register_password1"></mt-field>
        <mt-field label="确认密码" placeholder="请确认密码" type="password" v-model="register_password2"></mt-field>

        <mt-button type="primary" size="large" @click.native="register">注册</mt-button>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import HeaderBar from "@/components/base/header-bar/header-bar";
import axios from "axios";

export default {
  components: {
    HeaderBar
  },
  data() {
    return {
      selected: "1",
      login_username: "",
      login_password: "",
      register_username: "",
      register_email: "",
      register_password1: "",
      register_password2: ""
    };
  },
  props: {},
  watch: {},
  methods: {
    back() {
      this.$router.push({
        path: "/index"
      });
    },
    login() {
      if (this.login_username == "" || this.login_password == "") {
        this.$Modal.info({
          title: "提示",
          content: "请输出用户名和密码"
        });
      } else {
        this.$http
          .get(
            "/user/userInfo?userName=" +
              this.login_username +
              "&pwd=" +
              this.login_password,
            {}
          )
          .then(res => {
            if (res.data.length == 0) {
              sessionStorage.removeItem("userName");
              this.$Modal.info({
                title: "提示",
                content: "用户名或密码错误"
              });
            } else {
              sessionStorage.setItem("userName", res.data[0].userName);
              sessionStorage.setItem("userId", res.data[0].userId);
              this.$Modal.info({
                title: "提示",
                content: "成功",
                onOk: () => {
                  this.$router.push("/index");
                }
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    register() {
      if (this.register_username == "") {
        this.$Modal.info({
          title: "提示",
          content: "用户名不能为空"
        });
      } else if (this.register_email == "") {
        this.$Modal.info({
          title: "提示",
          content: "注册邮箱不能为空"
        });
      } else if (
        this.register_password1 == "" ||
        this.register_password2 == ""
      ) {
        this.$Modal.info({
          title: "提示",
          content: "密码不能为空"
        });
      } else {
        if (this.register_password1 == this.register_password2) {
          this.$http
            .get("/user/isExistence?userName=" + this.register_username, {})
            .then(res => {
              if (res.data.length == 0) {
                this.$http
                  .post("/user/insertNewUser", {
                    userName: this.register_username,
                    email: this.register_email,
                    pwd: this.register_password1
                  })
                  .then(res => {
                    if (res.data != null) {
                      sessionStorage.setItem(
                        "userName",
                        this.register_username
                      );
                      this.$Modal.info({
                        title: "提示",
                        content: "注册成功",
                        onOk: () => {
                          this.$router.push("/index");
                        }
                      });
                    } else {
                      his.$Modal.info({
                        title: "提示",
                        content: "注册失败,请联系后台管理员"
                      });
                    }
                  })
                  .catch(err => {
                    console.log(err);
                  });
              } else {
                this.$Modal.info({
                  title: "提示",
                  content: "该用户名已存在"
                });
              }
            })
            .catch(err => {});
        } else {
          this.$Modal.info({
            title: "提示",
            content: "两次密码不一致"
          });
        }
      }
    }
  },
  filters: {},
  computed: {},
  created() {},
  mounted() {}
};
</script>

<style lang='scss' scoped>
@import "~@/assets/scss/const.scss";
@import "~@/assets/scss/mixin.scss";

.login {
  color: #333;
  margin-top: 40px;
  background-color: #fff;
  overflow: visible;
  .login-wrapper {
    margin-top: 20px;
    overflow: hidden;
    .mint-button {
      margin-top: 30px;
    }
  }
  .register-wrapper {
    margin-top: 20px;
    overflow: hidden;
    .mint-button {
      margin-top: 30px;
    }
  }
}
</style>
