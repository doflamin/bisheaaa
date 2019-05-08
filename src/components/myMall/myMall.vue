<template>
  <div>
    <Card :bordered="false">
      <p slot="title">
        <Icon type="ios-arrow-back" size="24" @click="returnToMine"/>我的店铺
      </p>
      <Form :model="formItem" :label-width="80">
        <FormItem label="店铺名称">
          <Input v-model="formItem.input" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="店铺类型">
          <Select v-model="typeModel" multiple style="width:260px">
            <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label="起送费">
          <InputNumber :max="100" :min="0" v-model="formItem.price"></InputNumber>
        </FormItem>
        <FormItem label="配送费">
          <InputNumber :max="100" :min="0" v-model="formItem.fee"></InputNumber>
        </FormItem>
        <FormItem label="人均">
          <InputNumber :max="100" :min="0" v-model="formItem.average"></InputNumber>
        </FormItem>
        <FormItem label="配送时间">
          <InputNumber :max="100" :min="0" v-model="formItem.deliveryTime"></InputNumber>min
        </FormItem>
        <FormItem label="店铺描述">
          <Input
            v-model="formItem.textarea"
            type="textarea"
            :autosize="{minRows: 2,maxRows: 5}"
            placeholder="Enter something..."
          ></Input>
        </FormItem>
        <FormItem label="店铺信息">
          <Input
            v-model="formItem.bulletin"
            type="textarea"
            :autosize="{minRows: 2,maxRows: 5}"
            placeholder="Enter something..."
          ></Input>
        </FormItem>
        <FormItem>
          <Upload
            action="//localhost:8002/user/uploadImg/"
            :format="['jpg','jpeg','png']"
            :on-success="uploadSuccess"
          >
            <Button icon="ios-cloud-upload-outline">Upload files</Button>
          </Upload>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="updateMyMail">{{btn}}</Button>
          <Button style="margin-left: 8px" @click="returnToMine">取消</Button>
        </FormItem>
      </Form>
      <Button long type="success" @click="modal1 = true">+新增分类</Button>
      <br>
      <br>
      <Modal v-model="modal1" title="添加分类" @on-ok="addGoods">
        <Input v-model="addGoodsValue" placeholder="分类名" style="width: 300px"/>
      </Modal>

      <Modal v-model="modal2" :title="title">
        <Button long type="success" @click="modal3 = true">+新增菜品</Button>
        <br>
        <br>
        <Table :columns="foodsCol" :data="foodsdata"></Table>
      </Modal>

      <Modal v-model="modal3" title="添加菜品" @on-ok="addFoods">
        <Input v-model="addFoodsValue" placeholder="菜名" style="width: 300px"/>
        <Input v-model="addFoodsPrice" placeholder="价格" style="width: 300px"/>
        <Input v-model="addFoodsDescription" placeholder="描述" style="width: 300px"/>

        <Upload
          action="//localhost:8002/user/uploadImg/"
          :format="['jpg','jpeg','png']"
          :on-success="uploadSuccess"
        >
          <Button icon="ios-cloud-upload-outline">Upload files</Button>
        </Upload>
      </Modal>

      <Table :columns="columns" :data="Tabledata"></Table>
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      modal1: false,
      modal2: false,
      modal3: false,
      addFoodsValue: "",
      addFoodsPrice: "",
      addFoodsDescription: "",
      goods_id: 0,
      addGoodsValue: "",
      imgPath: "",
      btn: "添加",
      formItem: {
        input: "",
        price: 0,
        fee: 0,
        average: 0,
        deliveryTime: 0,
        textarea: "",
        bulletin: ""
      },
      typeList: [
        {
          value: "1",
          label: "美食"
        },
        {
          value: "2",
          label: "美团超市"
        },
        {
          value: "3",
          label: "生鲜果蔬"
        },
        {
          value: "4",
          label: "甜点饮品"
        },
        {
          value: "5",
          label: "正餐优选"
        },
        {
          value: "6",
          label: "美团专送"
        },
        {
          value: "7",
          label: "能量西餐"
        },
        {
          value: "8",
          label: "精品小吃"
        }
      ],
      typeModel: [],
      columns: [
        {
          title: "分类名",
          key: "name"
        },

        {
          title: "操作",
          key: "handle",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "success",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.goods_id = params.row.id;
                      this.modal2 = true;
                      this.title = params.row.name;
                      this.foodsdata = params.row.foods;
                    }
                  }
                },
                "查看菜品"
              ),
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
                        .post("/user/deleteGoods", {
                          GoodsId: params.row.id
                        })
                        .then(res => {
                          this.Tabledata.splice(params.index, 1);
                          let arr = [];
                          for (let i = 0; i < this.Tabledata.length; i++) {
                            arr.push(this.Tabledata[i].id);
                          }
                          this.$http
                            .post("/user/updateGoodsOfSeller", {
                              arr: arr.join(","),
                              seller: +sessionStorage.getItem("sellerId")
                            })
                            .then(res => {})
                            .catch(err => {});
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
      Tabledata: [],
      foodsCol: [
        {
          title: "分类名",
          key: "name"
        },
        {
          title: "价格",
          key: "price"
        },
        {
          title: "操作",
          key: "handle",
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
                          this.foodsdata.splice(params.index, 1);
                          let arr = [];
                          for (let i = 0; i < this.foodsdata.length; i++) {
                            arr.push(this.foodsdata[i].foods_id);
                          }
                          this.$http
                            .post("/user/updateFoodsOfSeller", {
                              arr: arr.join(","),
                              seller: this.goods_id
                            })
                            .then(res => {})
                            .catch(err => {});
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
      foodsdata: []
    };
  },
  methods: {
    uploadSuccess(res) {
      this.$data.imgPath = res.data.imgPath;
    },
    returnToMine() {
      this.$router.push({
        path: "/Mine"
      });
    },
    updateMyMail() {
      if (this.btn == "添加") {
        this.$http
          .post("/user/addMyMail", {
            ownerId: +sessionStorage.getItem("userId"),
            name: this.formItem.input,
            type: this.typeModel.join(","),
            price: this.formItem.price,
            fee: this.formItem.fee,
            average: this.formItem.average,
            textarea: this.formItem.textarea,
            deliveryTime: this.formItem.deliveryTime,
            description: "蜂鸟专送",
            icon_url:
              "../../../../static/uploads/51639e2e7a51c71d967acc44a060e3092048.png",
            info: "由美团专送提供高品质送餐服务",
            bulletin: this.formItem.bulletin,
            pic_url: this.$data.imgPath,
            distance: "2.0KM"
          })
          .then(res => {
            this.$Modal.success({
              title: "成功",
              content: "添加成功"
            });
          })
          .catch(err => {});
      } else if (this.btn == "更新") {
        this.$http
          .post("/user/updateMyMail", {
            ownerId: +sessionStorage.getItem("userId"),
            name: this.formItem.input,
            type: this.typeModel.join(","),
            price: this.formItem.price,
            fee: this.formItem.fee,
            average: this.formItem.average,
            textarea: this.formItem.textarea,
            deliveryTime: this.formItem.deliveryTime,
            description: "蜂鸟专送",
            icon_url:
              "../../../../static/uploads/51639e2e7a51c71d967acc44a060e3092048.png",
            info: "由美团专送提供高品质送餐服务",
            bulletin: this.formItem.bulletin
          })
          .then(res => {
            this.$Modal.success({
              title: "成功",
              content: "修改成功"
            });
          })
          .catch(err => {});
      }
    },
    _initData() {
      this.$http
        .get("/user/getMyMail?ownerId=" + sessionStorage.getItem("userId"), {})
        .then(res => {
          if (res.data.data.length == 0) {
            this.btn = "添加";
          } else {
            sessionStorage.setItem("sellerId", res.data.data[0].id);
            this.btn = "更新";
            this.formItem.input = res.data.data[0].name;
            this.typeModel = res.data.data[0].types.split(",");
            this.formItem.price = parseInt(res.data.data[0].min_price_tip);
            this.formItem.fee = parseInt(res.data.data[0].shipping_fee_tip);
            this.formItem.average = parseInt(
              res.data.data[0].average_price_tip
            );
            this.formItem.deliveryTime = parseInt(
              res.data.data[0].avg_delivery_time
            );
            this.formItem.textarea = res.data.data[0].infos;
            this.formItem.bulletin = res.data.data[0].bulletin;

            this.$http
              .get(
                "/user/goods?seller_id=" + sessionStorage.getItem("sellerId"),
                {}
              )
              .then(res => {
                this.Tabledata = res.data.data;
              })
              .catch(err => {});
          }
        })
        .catch(err => {});
    },
    addGoods() {
      this.$http
        .post("/user/addGoods", {
          addGoodsValue: this.addGoodsValue,
          ownerId: +sessionStorage.getItem("sellerId"),
          foods_id: "   "
        })
        .then(res => {
          var arr = [];
          for (let i = 0; i < this.Tabledata.length; i++) {
            arr.push(this.Tabledata[i].id);
          }
          arr.push(res.data.insertId);
          this.$http
            .post("/user/updateGoodsofSeller", {
              arr: arr.join(","),
              seller: +sessionStorage.getItem("sellerId")
            })
            .then(res => {
              this._initData();
            })
            .catch(err => {});
        })
        .catch(err => {});
    },
    addFoods() {
      this.$http
        .post("/user/addFoods", {
          addFoodsValue: this.addFoodsValue,
          ownerId: +sessionStorage.getItem("sellerId"),
          addFoodsPrice: this.addFoodsPrice,
          imgPath: this.imgPath,
          addFoodsDescription: this.addFoodsDescription,
          icon: this.imgPath
        })
        .then(res => {
          var arr = [];
          for (let i = 0; i < this.foodsdata.length; i++) {
            arr.push(this.foodsdata[i].foods_id);
          }
          arr.push(res.data.insertId);
          this.$http
            .post("/user/updateFoodsofSeller", {
              arr: arr.join(","),
              seller: this.goods_id
            })
            .then(res => {
              this._initData();
            })
            .catch(err => {});
        })
        .catch(err => {});
    }
  },
  mounted() {
    this._initData();
  }
};
</script>
