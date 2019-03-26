<template>
    <Row>
        <Col span="24">
            <Card>
                <p slot="title"><Icon type="ios-arrow-back" size="24" @click="returnToMine"/>关于此应用
                </p>
                <p>这个应用是李铁铭的个人毕业设计,不参与线上开发</p>
                <p>如有任何问题,请联系</p>
                <p>1299347597@qq.com</p>
            </Card>
        </Col>
        
    </Row>
</template>
<script>
    export default {
        methods:{
            returnToMine() {
                this.$router.push({
                    path: "/Mine"
                });
            },
        }
    }
</script>
