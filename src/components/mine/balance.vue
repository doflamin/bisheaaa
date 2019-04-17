<template>
  <Row>
    <Col span="24">
      <Card>
        <p slot="title">
          <Icon type="ios-arrow-back" size="24" @click="returnToMine"/>余额
        </p>
        <p>${{money}}</p>
        <Button type="primary" @click="modal1 = true">充值</Button>
        <Modal v-model="modal1" title="请输入充值余额" @on-ok="ok" @on-cancel="cancel">
          <Input v-model="value" style="width: 300px"/>
        </Modal>
      </Card>
    </Col>
  </Row>
</template>
<script>
export default {
  data() {
    return {
      money: "",
      modal1: false,
      value: ""
    };
  },
  methods: {
    _initData() {
      this.$http
        .get("/user/getMoney?userId=" + sessionStorage.getItem("userId"), {})
        .then(res => [(this.money = res.data[0].money)])
        .catch(err => {});
    },
    ok() {
      if (sessionStorage.getItem("userId")) {
        this.$http
          .post("/user/setMoney", {
            userId: +sessionStorage.getItem("userId"),
            money: parseInt(this.value) + parseInt(this.money)
          })
          .then(res => {
            this._initData();
          })
          .catch(err => {});
      } else {
        this.$Modal.info({
          title: "提示",
          content: "请先登录",
          onOk: () => {
            this.$router.push("/index");
          }
        });
      }
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    },
    returnToMine() {
      this.$router.push({
        path: "/Mine"
      });
    }
  },
  mounted() {
    this._initData();
  }
};
</script>
