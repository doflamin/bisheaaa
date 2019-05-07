<template>
  <Card :bordered="false">
    <p slot="title">
      <Icon type="ios-arrow-back" size="24" @click="returnToMine"/>收藏管理
    </p>
    
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
          key: "name"
        },
        {
          title: "操作",
          key: "action",
          // width: 80,
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
                      this.remove(params.index, params.row.id);
                    }
                  }
                },
                "删除"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "success",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      sessionStorage.setItem('sellerId',params.row.id)

                      this.$router.push({
                        path: '/restaurant'
                      })
                    }
                  }
                },
                "进入店家"
              )
            ]);
          }
        }
      ],
      data6: [],
      value: "",
      colArr:[]
    };
  },
  methods: {
    returnToMine(index) {
      this.$router.push({
        path: "/Mine"
      });
    },
    remove(index, addId) {
      let oldArr = this.colArr
      let newArr =  oldArr.splice(oldArr.indexOf(addId),1)
      let str = oldArr.join(',')
      this.$http
        .post("/user/delCollection", {
          user_id: +sessionStorage.getItem('userId'),
          newCol:str
        })
        .then(res => {
          sessionStorage.setItem('userCollection',str)
          this.freash()
        })
        .catch(err => {});
    },
    freash() {
      this.$http
        .get("/user/getCollection?userId=" + sessionStorage.getItem("userId"), {})
        .then(res => {
          this.data6 = res.data;
          this.colArr.length = 0
          for (let i = 0; i < res.data.length; i++) {
            this.colArr.push(res.data[i].id)
            
          }

        })
        .catch(err => {});
        console.log(this.colArr)
    }
  },
  mounted() {
    this.freash();
  }
};
</script>
