<template>
    <Row>
        <Col span="24">
            <Card>
                <p slot="title"><Icon type="ios-arrow-back" size="24" @click="returnToMine"/>余额
                </p>
                <p>$25.50</p>
                <!-- <p>如有任何问题,请联系</p>
                <p>1299347597@qq.com</p> -->
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
