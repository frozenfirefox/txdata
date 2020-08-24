<template>
  <div class="home">
    <Scroll :on-reach-bottom="handleReachBottom" :height="contentScroll">
      <Card style="width:92%; margin: 5px auto; background-color: #f7f7f7;padding: 20px"  v-for="item in bangList">
        <p slot="title" style="color: chocolate">
          <Icon type="ios-star" v-for="n in 4" :key="n" style="text-align: left;color: #ffac2d"></Icon>
          top({{item[0]}})
          姓名：{{item[2]}}
        </p>
        <a :href="$tx_host+item[1]" target="_blank" slot="extra" >
          <Icon type="ios-man" title="查看英雄榜" />
        </a>
        <ul>
          <li class="li">
            <Row>
              <Col span="12">
                <span style="color: green">
                   势力：{{item[7]?item[7]:'暂无势力'}}
                </span>
              </Col>
              <Col span="12">
                <span>
                   职业：{{item[6]}}
                </span>
              </Col>

            </Row>

          </li>
          <li class="li">
            <Col span="12">
                <span>
                   修为：{{item[8]}}
                </span>
            </Col>
            <Row>
              <Col span="12">
                <span>
                   装评：{{item[9]}}
                </span>
              </Col>
            </Row>
          </li>
          <li class="li">
            <Row>
              <Col span="24">
                <span>
                   总修为：{{item[10]}}
                </span>
              </Col>
            </Row>
          </li>
          <li class="li">
            <Col span="24">
                <span>
                   大区-服务器：{{item[3]}}-{{item[4]}}
                </span>
            </Col>
          </li>
        </ul>
      </Card>
    </Scroll>
    <!--    做一个图钉-->
    <Affix :offset-bottom="0" style="color: black;padding-left: 10px">
      <Row>
        <Col span="12">
          <Button type="warning" style="width: 100%" @click="selectData">筛选</Button>
        </Col>
        <Col span="12">
          <Button type="success" style="width: 100%" @click="$Message.info('敬请期待')">查询</Button>
        </Col>
      </Row>
    </Affix>
<!--    查询-->
    <Drawer title="筛选查询" width="100" placement="left" :closable="false" v-model="select_modal">
      <Form ref="formValidate" :model="request" :rules="requestValidate" :label-width="80">
        <FormItem label="角色名称" prop="name">
          <Input v-model="request.name" placeholder="请输入角色名称（回眸一笑百媚生）"></Input>
        </FormItem>
        <FormItem label="势力名称" prop="union_name">
          <Input v-model="request.union_name" placeholder="请输入势力名称（全服最强）"></Input>
        </FormItem>
        <FormItem label="职业" prop="sect">
          <Input v-model="request.sect" placeholder="请输入职业名称（例如法师、炮手等等）"></Input>
        </FormItem>
        <FormItem label="修为">
          <Row>
            <Col span="11">
              <FormItem label="" prop="abilities_min">
                <Input v-model="request.abilities_min" placeholder="请输入最小修为值（2000）"></Input>
              </FormItem>
            </Col>
            <Col span="2" style="text-align: center">-</Col>
            <Col span="11">
              <FormItem label="" prop="abilities_max">
                <Input v-model="request.abilities_max" placeholder="请输入最大修为值（2000）"></Input>
              </FormItem>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="装评">
          <Row>
            <Col span="11">
              <FormItem label="" prop="equipment_min">
                <Input v-model="request.equipment_min" placeholder="请输入最小装评值（2000）"></Input>
              </FormItem>
            </Col>
            <Col span="2" style="text-align: center">-</Col>
            <Col span="11">
              <FormItem label="" prop="equipment_max">
                <Input v-model="request.equipment_max" placeholder="请输入最大装评值（2000）"></Input>
              </FormItem>
            </Col>
          </Row>
        </FormItem>

        <FormItem label="总修为">
          <Row>
            <Col span="11">
              <FormItem label="" prop="all_abilities_min">
                <Input v-model="request.all_abilities_min" placeholder="请输入最小总修为值（2000）"></Input>
              </FormItem>
            </Col>
            <Col span="2" style="text-align: center">-</Col>
            <Col span="11">
              <FormItem label="" prop="all_abilities_max">
                <Input v-model="request.all_abilities_max" placeholder="请输入最大总修为值（2000）"></Input>
              </FormItem>
            </Col>
          </Row>
        </FormItem>
        <FormItem style="text-align: center">
          <Button type="primary" @click="handleSubmit('formValidate')">查询</Button>
          <Button @click="handleReset('formValidate')" style="margin-left: 8px">取消</Button>
        </FormItem>
      </Form>
    </Drawer>
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
        name: '',//姓名
        union_name: '',//势力名称
        sect: '',//职业名称
        abilities_min: '',//修为最小值
        abilities_max: '',//修为最大值
        equipment_min: '',//装评最小值
        equipment_max: '',//装评最大值
        all_abilities_min: '',//总修为最小值
        all_abilities_max: '',//总修为最大值
      },
      select_modal: false,
      totalNumber: '',
      contentScroll: '',
      requestValidate: {
        name: [
          { required: false, type: 'string', message: '请输入正确的角色名称', trigger: 'blur' }
        ],
        union_name: [
          { required: false, type: 'string', message: '请输入正确的势力名称', trigger: 'blur' }
        ],
        sect: [
          { required: false, type: 'string', message: '请输入正确的职业名称', trigger: 'blur' }
        ],
        abilities_min: [
          { required: false, type: 'string', message: '请输入正确的最小的修为值', trigger: 'blur' }
        ],
        abilities_max: [
          { required: false, type: 'string', message: '请输入正确的最大的修为值', trigger: 'blur' }
        ],
        equipment_min: [
          { required: false, type: 'string', message: '请输入正确的最小的装评值', trigger: 'blur' }
        ],
        equipment_max: [
          { required: false, type: 'string', message: '请输入正确的最大的装评值', trigger: 'blur' }
        ],
        all_abilities_min: [
          { required: false, type: 'string', message: '请输入正确的最大的总修为值', trigger: 'blur' }
        ],
        all_abilities_max: [
          { required: false, type: 'string', message: '请输入正确的最大的总修为值', trigger: 'blur' }
        ]
      },
    }
  },
  mounted() {
    this.contentScroll = window.screen.height - 20
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
    },
    selectData () {
      this.select_modal = true
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.getList(1)
          this.$Message.success('查询成功!');
          this.select_modal = false
        } else {
          this.$Message.error('fail!');
        }
      })
    },
    handleReset (name) {
      // this.$refs[name].resetFields()
      this.select_modal = false
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
