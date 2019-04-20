<template>
  <div>
    <Card :bordered="false">
      <p slot="title">
        <Icon type="ios-arrow-back" size="24" @click="returnToFind"/>添加文章
      </p>

      <Form :model="formTop" label-position="top">
        <FormItem label="标题">
          <Input v-model="formTop.input1"></Input>
        </FormItem>
        <FormItem label="内容">
          <Input v-model="formTop.input2" type="textarea" :rows="4"></Input>
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
          <Button type="success" long @click="addNewArticle">提交</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgPath: '',
      formTop: {
        input1: "",
        input2: "",
        input3: ""
      }
    };
  },
  methods: {
    returnToFind() {
      this.$router.push("/find");
    },
    addNewArticle() {
      this.$http
        .post("/user/addArticle", {
          title: this.formTop.input1,
          desc: this.formTop.input2,
          writerId:+sessionStorage.getItem('userId'),
          imgPath: this.$data.imgPath
        })
        .then(res => {
          this.$Modal.success({
            title: "成功",
            content: "您现在可以在文章列表里查看您发布的内容了",
            onOk: () => {
              this.$router.push("/find");
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    uploadSuccess(res) {
      console.log(arguments);
      this.$data.imgPath = res.data.imgPath
    }

  }
};
</script>
