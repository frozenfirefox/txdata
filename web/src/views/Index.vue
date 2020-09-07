<template>
    <div class="index padding-20" :style="{height: '100vh'}">
        <Row>
            <Col span="20" offset="2">
                <Carousel autoplay v-model="loop1" loop>
                    <CarouselItem>
                        <div class="carousel1">1</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="carousel2">2</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="carousel3">3</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="carousel4">4</div>
                    </CarouselItem>
                </Carousel>
            </Col>
        </Row>
        <Row class="margin-top-20">
            <Col span="11">
                <router-link :to="{path:'/home'}">
                    <Card :bordered="true" class="card-bg">
                        <div style="text-align:center">
                            <img src="../assets/img/square/tx3.png">
                            <h3>天下三专区</h3>
                        </div>
                    </Card>
                </router-link>
            </Col>
            <Col span="11" offset="2">
                <a href="#"  @click.prevent="$Message.info('期待中')">
                    <Card :bordered="true" class="card-bg">
                        <div style="text-align:center">
                            <img src="../assets/img/square/mh.jpg">
                            <h3>梦幻西游专区</h3>
                        </div>
                    </Card>
                </a>
            </Col>
        </Row>
        <Row class="margin-top-20">
            <Col span="11">
                <a href="#"  @click.prevent="$Message.info('期待中')">
                    <Card :bordered="true" class="card-bg">
                        <div style="text-align:center">
                            <img src="../assets/img/square/qnyh.png">
                            <h3>倩女幽魂专区</h3>
                        </div>
                    </Card>
                </a>
            </Col>
            <Col span="11" offset="2">
                <a href="#"  @click.prevent="$Message.info('期待中')">
                    <Card :bordered="true"  class="card-bg">
                        <div style="text-align:center">
                            <img src="../assets/img/square/nsh.png">
                            <h3>逆水寒专区</h3>
                        </div>
                    </Card>
                </a>
            </Col>
        </Row>
    </div>
</template>

<script>
  export default {
    name: 'Index',
    data () {
      return {
        loop1: 0
      }
    },
    mounted() {
    },
    computed: {
    },
    methods: {
    }
  }
</script>
<style scoped>
    .index{
        background: url("../assets/img/mainbg.jpg") repeat-y center;
    }
    .padding-20{
        padding: 20px;
    }
    .margin-top-20{
        margin-top: 20px;
    }
    .card-bg{
        background-color: rgba(187, 255, 255, 0.8);
    }
    .carousel1{
        background: url("../assets/img/square/mainbg001.jpg");
        height: 230px;
    }
    .carousel2{
        background: url("../assets/img/square/mainbg002.jpg");
        height: 230px;
    }
    .carousel3{
        background: url("../assets/img/square/mainbg003.jpg");
        height: 230px;
    }
    .carousel4{
        background: url("../assets/img/square/mainbg004.jpg");
        height: 230px;
    }
</style>
