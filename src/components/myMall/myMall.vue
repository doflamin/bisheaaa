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
        <FormItem>
          <Button type="primary" @click="updateMyMail">{{btn}}</Button>
          <Button style="margin-left: 8px" @click="returnToMine">取消</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      btn: "添加",
      formItem: {
        input: "",
        price: 0,
        fee: 0,
        average: 0,
        deliveryTime: 0,
        textarea: ""
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
      typeModel: []
    };
  },
  methods: {
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
            description: "蜂鸟专送"
          })
          .then(res => {})
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
            description: "蜂鸟专送"
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
          }
        })
        .catch(err => {});
    }
  },
  mounted() {
    this._initData();
  }
};
</script>
