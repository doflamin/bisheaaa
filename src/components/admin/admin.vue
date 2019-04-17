
<template>
  <Card :bordered="false">
    <p slot="title">
      <Icon type="ios-arrow-back" size="24" @click="returnToMine"/>管理员
    </p>
    <Tabs value="name1" type="card">
      <TabPane label="用户管理" name="name1">
        <Button type="dashed" long @click="modal1 = true">+添加</Button>
        <br/>
        <br/>

        <Modal v-model="modal1" title="输入用户信息" @on-ok="addNewUser">
          <Input v-model="userName" placeholder="userName"/>
          <Input v-model="pwd" placeholder="pwd"/>
          <Input v-model="email" placeholder="email"/>
          <Input v-model="type" placeholder="type"/>
          <Input v-model="collection" placeholder="collection"/>
          <Input v-model="money" placeholder="money"/>
        </Modal>
        <Table :columns="columns1" :data="data1"></Table>
      </TabPane>
      <TabPane label="订单管理" name="name2">
        <Table :columns="columns2" :data="data2"></Table>
      </TabPane>
      <TabPane label="菜单管理" name="name3">
        <Table :columns="columns3" :data="data3"></Table>
      </TabPane>
      <TabPane label="地址管理" name="name4">
        <Table :columns="columns4" :data="data4"></Table>
      </TabPane>
      <TabPane label="商家管理" name="name5">
        <Table :columns="columns5" :data="data5"></Table>
      </TabPane>
    </Tabs>
  </Card>
</template>
<script>
export default {
  data() {
    return {
      modal1: false,
      userName: "",
      pwd: "",
      email: "",
      type: "",
      collection: "",
      money: "",
      columns1: [
        {
          title: "userId",
          key: "userId"
        },
        {
          title: "userName",
          key: "userName"
        },
        {
          title: "pwd",
          key: "pwd"
        },
        {
          title: "email",
          key: "email"
        },
        {
          title: "type",
          key: "type"
        },
        {
          title: "collection",
          key: "collection"
        },
        {
          title: "money",
          key: "money"
        },
        {
          title: "操作",
          key: "handel",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      console.log(params.row.userId);
                      this.$http
                        .post("/user/delUserById", {
                          userId: params.row.userId
                        })
                        .then(res => {
                          this.getUserList();
                        })
                        .catch(err => {});
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      data1: [],
      columns2: [
        {
          title: "order_id",
          key: "order_id"
        },
        {
          title: "foods_id",
          key: "foods_id"
        },
        {
          title: "owner_id",
          key: "owner_id"
        },
        {
          title: "seller_id",
          key: "seller_id"
        },
        {
          title: "address_id",
          key: "address_id"
        },
        {
          title: "price",
          key: "price"
        },
        {
          title: "操作",
          key: "handel",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      
                      this.$http
                        .post("/user/delOrder", {
                          order_id: params.row.order_id
                        })
                        .then(res => {
                          this.getOrderList();
                        })
                        .catch(err => {});
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      data2: [],
      columns3: [
        {
          title: "foods_id",
          key: "foods_id"
        },
        {
          title: "name",
          key: "name"
        },
        {
          title: "description",
          key: "description"
        },
        {
          title: "info",
          key: "info"
        },
        {
          title: "sellCount",
          key: "sellCount"
        },
        {
          title: "rating",
          key: "rating"
        },
        {
          title: "price",
          key: "price"
        },
        {
          title: "image",
          key: "image"
        },
        {
          title: "icon",
          key: "icon"
        },
        {
          title: "操作",
          key: "handel",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      
                      this.$http
                        .post("/user/delFoods", {
                          foods_id: params.row.foods_id
                        })
                        .then(res => {
                          this.getFoodsList();
                        })
                        .catch(err => {});
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      data3: [],
      columns4: [
        {
          title: "add_id",
          key: "add_id"
        },
        {
          title: "user_id",
          key: "user_id"
        },
        {
          title: "address",
          key: "address"
        },
        
        {
          title: "操作",
          key: "handel",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      console.log(params.row.add_id);
                      this.$http
                        .post("/user/delAddress", {
                          add_id: params.row.add_id
                        })
                        .then(res => {
                          this.getAdressList();
                        })
                        .catch(err => {});
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      data4: [],
      columns5: [
        {
          title: "id",
          key: "id"
        },
        {
          title: "name",
          key: "name"
        },
        {
          title: "wm_poi_score",
          key: "wm_poi_score"
        },
        {
          title: "month_sale_num",
          key: "month_sale_num"
        },
        {
          title: "avg_delivery_time",
          key: "avg_delivery_time"
        },
        {
          title: "min_price_tip",
          key: "min_price_tip"
        },
        {
          title: "shipping_fee_tip",
          key: "shipping_fee_tip"
        },
        {
          title: "average_price_tip",
          key: "average_price_tip"
        },
        {
          title: "info",
          key: "info"
        },
        {
          title: "pic_url",
          key: "pic_url"
        },
        {
          title: "icon_url",
          key: "icon_url"
        },
        {
          title: "distance",
          key: "distance"
        },
        {
          title: "types",
          key: "types"
        },
        {
          title: "bulletin",
          key: "bulletin"
        },
        {
          title: "infos",
          key: "infos"
        },
        {
          title: "description",
          key: "description"
        },
        {
          title: "score",
          key: "score"
        },
        {
          title: "owner_id",
          key: "owner_id"
        },
        {
          title: "goods_id",
          key: "goods_id"
        },
        {
          title: "操作",
          key: "handel",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      
                      this.$http
                        .post("/user/delseller", {
                          id: params.row.id
                        })
                        .then(res => {
                          this.getSellerList();
                        })
                        .catch(err => {});
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      data5: []
    };
  },
  methods: {
    returnToMine(index) {
      this.$router.push({
        path: "/login"
      });
    },
    getUserList() {
      this.$http
        .get("/user/getUserList", {})
        .then(res => {
          this.data1 = res.data;
        })
        .catch(err => {});
    },
    getOrderList() {
      this.$http
        .get("/user/getOrderList", {})
        .then(res => {
          this.data2 = res.data;
        })
        .catch(err => {});
    },
    getFoodsList() {
      this.$http
        .get("/user/getFoodsList", {})
        .then(res => {
          this.data3 = res.data;
        })
        .catch(err => {});
    },
    getAdressList() {
      this.$http
        .get("/user/getAdressList", {})
        .then(res => {
          this.data4 = res.data;
        })
        .catch(err => {});
    },
    getSellerList() {
      this.$http
        .get("/user/getSellerList", {})
        .then(res => {
          this.data5 = res.data;
        })
        .catch(err => {});
    },
    addNewUser() {
      this.$http
        .post("/user/addNewUser", {
          userName: this.userName,
          pwd: this.pwd,
          email: this.email,
          type: this.type,
          collection: this.collection,
          money: this.money
        })
        .then(res => {
          this.getUserList();
        })
        .catch(err => {});
    }
  },
  mounted() {
    this.getUserList();
    this.getOrderList();
    this.getFoodsList();
    this.getAdressList();
    this.getSellerList();
  }
};
</script>
