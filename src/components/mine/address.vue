<template>
  <Card :bordered="false">
    <p slot="title">
      <Icon type="ios-arrow-back" size="24" @click="returnToMine"/>地址管理
    </p>
    <Button type="dashed" long @click="addNewAddress">+添加</Button>
    <br>
    <br>
    <Table border :columns="columns7" :data="data6"></Table>
  </Card>
</template>
<script>
export default {
  data() {
    return {
      columns7: [
        {
          title: "地址",
          key: "address"
        },
        {
          title: "操作",
          key: "action",
          width: 80,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index, params.row.add_id);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      data6: [],
      value: ""
    };
  },
  methods: {
    returnToMine(index) {
      this.$router.push({
        path: "/Mine"
      });
    },
    addNewAddress() {
      this.$Modal.confirm({
        render: h => {
          return h("Input", {
            props: {
              value: this.value,
              autofocus: true,
              placeholder: "请输入您的地址"
            },
            on: {
              input: val => {
                this.value = val;
              }
            }
          });
        },
        onOk: () => {
          this.$http
            .post("/user/addNewAdd", {
              userId: +sessionStorage.getItem("userId"),
              address: this.value
            })
            .then(res => {
              this.freash();
            })
            .catch(err => {});
        }
      });
    },
    remove(index, addId) {
      this.$http
        .post("/user/delAddress", {
          add_id: addId
        })
        .then(res => {
          this.data6.splice(index, 1);
        })
        .catch(err => {});
    },
    freash() {
      this.$http
        .get("/user/getAddress?userId=" + sessionStorage.getItem("userId"), {})
        .then(res => {
          this.data6 = res.data;
        })
        .catch(err => {});
    }
  },
  mounted() {
    this.freash();
  }
};
</script>
