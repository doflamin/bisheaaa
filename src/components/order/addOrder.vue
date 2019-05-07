<template>
  <Card :bordered="false">
    <p slot="title">
      <Icon type="ios-arrow-back" size="24" @click="returnToMine"/>确认订单
    </p>

    <Card>
      <p slot="title">请选择地址</p>
      <Select v-model="addressModel" style="width:200px">
        <Option
          v-for="(item,index) in addressList"
          :value="item.add_id"
          :key="index"
        >{{ item.address }}</Option>
      </Select>
    </Card>

    <br>
    <br>
    <Table border :columns="columns7" :data="data6"></Table>
    <br>
    <br>

    <p>一共需要支付{{totalPrice}}元</p>
    <Button type="success" long @click="addNewOrder">提交</Button>
  </Card>
</template>
<script>
export default {
  data() {
    return {
      columns7: [
        {
          title: "商品",
          key: "name"
        },
        {
          title: "数量",
          key: "count"
        }
      ],
      data6: [],
      value: "",
      colArr: [],
      addressModel: "",
      addressList: [],
      foodsList: [],
      totalPrice: "",
      money: ""
    };
  },
  methods: {
    returnToMine(index) {
      this.$router.push({
        path: "/restaurant/goods"
      });
    },

    freash() {
      this.$http
        .get("/user/getAddress?userId=" + sessionStorage.getItem("userId"), {})
        .then(res => {
          this.addressList = res.data;
        })
        .catch(err => {});
      this.data6 = JSON.parse(sessionStorage.getItem("order"));
      this.totalPrice = JSON.parse(sessionStorage.getItem("totalPrice"))+JSON.parse(sessionStorage.getItem("peisong"));

      this.foodsList = [];
      for (let i = 0; i < this.data6.length; i++) {
        this.foodsList.push(this.data6[i].foods_id);
      }
    },
    addNewOrder() {
      this.$http
        .get("/user/getMoney?userId=" + sessionStorage.getItem("userId"), {})
        .then(res => {
          this.money = res.data[0].money;
          if (this.addressModel == "") {
            this.$Modal.info({
              title: "失败",
              content: "请设置您的配送地址"
            });
          } else {
            if (parseInt(this.money) < this.totalPrice) {
              this.$Modal.info({
                title: "失败",
                content: "余额不足"
              });
            } else {
              let arr = [];
              for (let i = 0; i < this.data6.length; i++) {
                let obj = {};
                obj.name = this.data6[i].name;
                obj.count = this.data6[i].count;
                obj.price = this.data6[i].price;
                arr.push(obj)

                
              }
              this.$http
                .post("/user/addNewOrder", {
                  owner_id: +sessionStorage.getItem("userId"),
                  seller_id: +sessionStorage.getItem("sellerId"),
                  address_id: this.addressModel,
                  foods_id: this.foodsList.join(","),
                  totalPrice: this.totalPrice,
                  order_msg:JSON.stringify(arr)
                })
                .then(res => {
                  this.$http
                    .post("/user/setMoney", {
                      userId: +sessionStorage.getItem("userId"),
                      money: parseInt(this.money) - parseInt(this.totalPrice)
                    })
                    .then(res => {
                      this.$Modal.success({
                        title: "成功",
                        content: "商家已接单,请耐心等候",
                        onOk: () => {
                          this.$router.push("/index");
                        }
                      });
                    })
                    .catch(err => {});
                })
                .catch(err => {});
            }
          }
        })
        .catch(err => {});
    }
  },
  mounted() {
    this.freash();
    

    

  }
};
</script>
