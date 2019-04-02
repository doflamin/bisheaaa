<template>
  <div style="background:#eee;">
    <Card :bordered="false">
        
      <p slot="title" ><Icon type="ios-arrow-back" size="24" @click="returnToFind"/>{{title}}</p>
      <p>{{article}}</p>
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
        title:'',
        article:'',
        view:0,
        find_id:0
    };
  },
  methods: {
    _initData() {
      this.$http
        .get("/user/article?find_id="+sessionStorage.getItem('findId'))
        .then(res => {
          if (res.data.code === 0) {
            this.title = res.data.data[0].title;
            this.article = res.data.data[0].body;
            this.view = res.data.data[0].view;
            this.find_id = res.data.data[0].find_id;
             this.$http
              .post("/user/viewAdd",{
                view:this.view+1,
                find_id:this.find_id
              })
              .then(res => {})
              .catch(err => {});
            console.log(this.view)
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    returnToFind(){
        this.$router.push('/find')
    }
  },
  mounted(){
      this._initData();
  }
};
</script>
