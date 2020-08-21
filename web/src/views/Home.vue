<template>
  <div class="home">
    <Scroll :on-reach-bottom="handleReachBottom" :height="contentScroll">
      <Card style="width:92%; margin: 5px auto; background-color: white; boder: 1px solid gray"  v-for="item in bangList">
        <p slot="title" style="color: chocolate">
          top({{item[0]}})
          {{item[7]?item[7]:'暂无势力'}}
        </p>
        <a :href="$tx_host+item[1]" target="_blank" slot="extra" >
          <Icon type="ios-loop-strong"></Icon>
          去看看
        </a>
        <ul>
          <li class="li">
            <span style="font-size: 18px; color: green">
               姓名：{{item[2]}}
            </span>
            <span>
               修为：{{item[8]}}
            </span>
            <span>
               装评：{{item[9]}}
            </span>
          </li>
          <li class="li">
            <span>
               职业：{{item[6]}}
            </span>
            <span>
               总修为：{{item[10]}}
            </span>
          </li>
          <li class="li">
            <span>
               大区-服务器：{{item[3]}}-{{item[4]}}
            </span>
          </li>
        </ul>
      </Card>
    </Scroll>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      bangList: [],
      request: {
        page: 1,
        pageSize: 10,
      },
      totalNumber: '',
      contentScroll: '',
    }
  },
  mounted() {
    this.contentScroll = window.screen.height
    console.log(this.contentScroll)
    this.getList()
  },
  methods: {
    getList (page) {
      //获取列表
      let params = this.request

      if(parseInt(page) > 0){
        params.page = page;
      }

      var vue = this;
      const url = this.$api_host+'getList.py'
      this.$axios.get(url, {
        params: params
      }).then(function(response){
        console.log(response)
        if(response.status == 200){
          if(vue.request.page > 1){
            for(let item in response.data.list){
              vue.bangList.push(response.data.list[item])
            }
          }else{
            vue.bangList = response.data.list
          }
          vue.totalNumber = response.data.totalNumber;
        }else{
          vue.$Message.warning('出错误了');
        }
      }).catch(function(error){
        vue.$Message.error(error);
      });
    },
    handleReachBottom () {
      const _this = this
      const max_page = Math.round(_this.totalNumber/_this.request.page)
      let page = ++this.request.page
      if (max_page < page) {
        this.$Message.warning('我是有底线的^--^')
      }

      setTimeout(function () {
        _this.getList(page)
      }, 500)
    }
  }
}
</script>
<style scoped>
  .li{
    line-height: 25px;
    list-style: none;
  }
</style>
