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
        <Col span="6">
          <Button type="warning" style="width: 100%" @click="selectData">筛选</Button>
        </Col>
        <Col span="6">
          <Dropdown trigger="click" @on-click="setOrder" style="width: 100%">
            <Button type="primary" style="width: 100%">
              {{orderName}}
              <Icon type="ios-arrow-down"></Icon>
            </Button>
            <DropdownMenu slot="list">
              <DropdownItem name="1">默认</DropdownItem>
              <DropdownItem name="2">最新</DropdownItem>
              <DropdownItem name="3">修为评价</DropdownItem>
              <DropdownItem name="4">装备评价</DropdownItem>
              <DropdownItem name="5">总修为</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
        <Col span="6">
          <Button type="success" style="width: 100%" @click="liveShow">日活统计</Button>
        </Col>
        <Col span="6">
          <Dropdown trigger="click" @on-click="toSource" style="width: 100%">
            <Button type="info" style="width: 100%">
              加入我们
              <Icon type="ios-arrow-down"></Icon>
            </Button>
            <DropdownMenu slot="list">
              <DropdownItem name="1">账号估值</DropdownItem>
              <DropdownItem name="2">开箱模拟</DropdownItem>
              <DropdownItem name="3">点赞投币</DropdownItem>
              <DropdownItem name="4">为她充电</DropdownItem>
              <DropdownItem name="5">加入我们</DropdownItem>
            </DropdownMenu>
          </Dropdown>
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
        <FormItem label="大区-服务器">
          <Row>
            <Col span="11">
              <FormItem label="" prop="section_name">
                <Input v-model="request.section_name" placeholder="请输入大区（79专区）"></Input>
              </FormItem>
            </Col>
            <Col span="2" style="text-align: center">-</Col>
            <Col span="11">
              <FormItem label="" prop="service_name">
                <Input v-model="request.service_name" placeholder="请输入服务器（飞鸿踏雪）"></Input>
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

<!--    更新提醒-->
    <Modal v-model="modalUpdate"
           title="更新提醒">
      <Row>
        <Col>
          加入我们：美女多福利多！！！
          特别鸣谢，
        </Col>
      </Row>
      <divider/>
      <Timeline>
        <TimelineItem>
          <p class="time">2020-08-25</p>
          <p class="content">英雄榜搜索软件问世</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2020-08-26</p>
          <p class="content">更新添加，筛选大区和服务器，以及按照排序筛选</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2020-08-29</p>
          <p class="content">更新添加，部分角色估价系统，估值入口：加入我们>>账号估值</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2020-08-31</p>
          <p class="content">更新修复估值，计算多个孩子的程序bug，并且对于估价的程序性能做了质的的提升，从而使估价更加顺畅</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2020-09-01</p>
          <p class="content">更新1.估价新增元魂珠、灵兽的估价 2.新增日活统计</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2020-09-02</p>
          <p class="content">更新新增模拟天下三开箱子，娱乐为主，开箱入口：加入我们>>开箱模拟</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2020-09-02</p>
          <p class="content">更新新增投币按钮，投币入口：加入我们>>点赞投币</p>
        </TimelineItem>
      </Timeline>
    </Modal>
    <!--估价-->
    <Modal v-model="modalValue"
           fullscreen
           title="估价系统">
      <Row>
        <Col span="24">
          <Input search v-model="bang_link" @on-search="toValue" enter-button="去估价" placeholder="请复制英雄榜链接" />
        </Col>
      </Row>
      <divider/>
      <template v-if="valueData ==  ''">
        <Spin fix v-if="loading">
          <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
          <div>疯狂运算中</div>
        </Spin>
        <div class="text-center" style="line-height: 700px;font-size: 50px">
              对这片土地爱得深沉
        </div>
      </template>
      <template v-if="valueData.length !=  ''">
        <Row class-name="line-height-20">
          <Col span="24" class-name="font-25 text-center">
            估价详情
          </Col>
        </Row>

        <Row class-name="line-height-20 text-center font-18">
          <Col span="12" class-name="text-right">
            角色名称：
          </Col>
          <Col span="12" class-name="text-left">
            {{valueData.info.name}}
          </Col>
        </Row>
        <Row class-name="line-height-20 font-18">
          <Col span="12" class-name="text-right">
            大区服务器势力：
          </Col>
          <Col span="12" class-name="text-left">
            {{valueData.info.section}}
          </Col>
        </Row>

        <Row class-name="line-height-20 font-18">
          <Col span="12" class-name="text-right">
            职业：
          </Col>
          <Col span="12" class-name="text-left">
            {{valueData.info.zhiye}}
          </Col>
        </Row>
        <Row class-name="line-height-20 font-18">
          <Col span="12" class-name="text-right">
            马灵化估价：
          </Col>
          <Col span="12" class-name="text-left">
            {{valueData.qiyaoPrice}}
          </Col>
        </Row>
        <Row class-name="line-height-20 font-18">
          <Col span="12" class-name="text-right">
            乾元丹估价：
          </Col>
          <Col span="12" class-name="text-left">
            {{valueData.qianyuanPrice}}
          </Col>
        </Row>
        <Row class-name="line-height-20 font-18">
          <Col span="12" class-name="text-right">
            元魂珠估价：
          </Col>
          <Col span="12" class-name="text-left">
            {{valueData.yuanhunPrice}}
          </Col>
        </Row>
        <Row class-name="line-height-20 font-18">
          <Col span="12" class-name="text-right">
            加护和炼护估价：
          </Col>
          <Col span="12" class-name="text-left">
            {{valueData.zuanPrice}}
          </Col>
        </Row>
        <Row class-name="line-height-20 font-18">
          <Col span="12" class-name="text-right">
            点化估价：
          </Col>
          <Col span="12" class-name="text-left">
            {{valueData.dianPrice}}
          </Col>
        </Row>
        <Row class-name="line-height-20 font-18">
          <Col span="12" class-name="text-right">
            天书估价：
          </Col>
          <Col span="12" class-name="text-left">
            {{valueData.tianshuPrice}}
          </Col>
        </Row>
        <Row class-name="line-height-20 font-18">
          <Col span="12" class-name="text-right">
            总价值（供参考）：
          </Col>
          <Col span="12" class-name="text-left">
            {{valueData.allPrice}}
          </Col>
        </Row>
      </template>
    </Modal>
<!--    抽屉日活-->
    <Drawer title="日活统计"  width="100" placement="left" :closable="true" v-model="modalLive">
      <div class="bar" id="chart1" style="width: 400px ;height: 600px"></div>
    </Drawer>

<!--    开箱抽屉-->
    <Drawer title="开箱子（过手瘾）"  width="100" placement="left" :closable="true" v-model="modalBox">
      <Select v-model="optionValue" style="width:200px">
        <Option v-for="item in modeList" :value="item.value" :key="item.value">{{ item.name }}</Option>
      </Select>
      <divider/>
      <div>
        <p>开箱子只是模拟，大家切勿当真</p>
        <divider/>
        <Row type="flex" class-name="row-height-60" justify="start" class="code-row-bg">
          <Col span="12" class-name="row-col-border">
            <Tooltip max-width="200" placement="right" transfer>
              <Button>月下伊人礼盒</Button>
              <div slot="content">
                <p>开启到鸿蒙玉时可选择翻倍兑换成【禁】天域声望·200</p>
                <p>打开月下伊人必得：鹊桥相会（右键点击法术防御力+10，状态持续180秒）</p>
                <p class="black-red">且有机会获得：</p>
                <p>宗门秘法·日、厚土、【禁】大禹之恩·2/天域声望·2礼盒（二选一）、【封】炼化之印·5/天域声望·5礼盒（二选一）、牵牛花、太阴星光匣。</p>
                <p class="black-red">更有机会获得：</p>
                <p>炼化之印（100）、尚书令、【禁】鸿蒙玉/天域声望·200礼盒（二选一）、星晖、七夕礼包半价券、军饷券·1000、军饷券·10000、六道轮回锤、【八十】白羊座·伤、乾坤诀等道具。</p>
                <p class="black-red">还有机会获得：</p>
                <p>庄周梦蝶礼盒、迷蝶香宝匣、陆尘·星贯长虹、星贯映辉礼盒、秋水流光（装件）、泡弟（饰件）、星河流转宝匣等道具。</p>
                <p>必要等级：30</p>
                <p>贵重等级：30</p>
                <p>禁交易</p>
              </div>
            </Tooltip>
          </Col>
          <Col span="3"><span>数量：</span><input :disabled="giftDisabled" v-model="openNumber" placeholder="请输入开启数量"/></Col>
          <Col span="3"><Button size="small" type="primary" @click="openGift">开启</Button></Col>
<!--          <Col span="3"><Button size="small" type="warning">暂停</Button></Col>-->
          <Col span="3"><Button size="small" type="error" @click="clearOpen">清除</Button></Col>
        </Row>
        <divider/>
        <Row type="flex" class-name="row-height-60" justify="start" align="bottom" class="code-row-bg" v-for="item in giftsGet">
          <Col span="3" class-name="row-col-border" v-for="inner in item">
            <Badge :count="inner.count" type="primary" style="height: 60px">
              <a href="#" class="demo-badge" :title="inner.name"><Icon size="58" :type="inner.icon" /></a>
            </Badge>
          </Col>
        </Row>
      </div>
    </Drawer>
<!--点赞投币-->
    <Modal v-model="modalCharge"
           title="点赞投币">
      <Row>
        <Col span="24">
          <p class="font-18 red">tip:郑重提示。如果此次充电对您的生活造成了影响，请即刻关掉这个充电页面。</p>
        </Col>
      </Row>
      <divider/>
      <Row>
        <Col span="24">
          <img src="../assets/img/weixin.jpg" width="100%"/>
        </Col>
      </Row>
      <divider/>
      <Row>
        <Col span="24">
          <img src="../assets/img/zhifubao.jpg" width="100%"/>
        </Col>
      </Row>
    </Modal>
  </div>
</template>

<script>
import 'echarts/lib/chart/bar'
export default {
  name: 'Home',
  data () {
    return {
      bangList: [],
      request: {
        orderby: 'abilities desc',
        page: 1,
        pageSize: 10,
        name: '',//姓名
        union_name: '',//势力名称
        sect: '',//职业名称
        section_name: '',//大区
        service_name: '',//服务器
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
      orderName: '排序',
      modalUpdate: true,
      modalValue: false,
      bang_link: '',
      valueData: '',
      loading: false,
      liveOption: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 10,
          data: []
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: []
          }
        ]
      },
      modalLive: false,
      modalBox: false,
      modeList: [
        {
          name: '温柔模式',
          rate: 0.8,
          value: 1,
        },
        {
          name: '期望模式',
          rate: 0.5,
          value: 2,
        },
        {
          name: '韭菜模式',
          rate: 0.2,
          value: 3,
        },
      ],
      optionValue: 1,
      giftList: [
        {
          name: '回灵丹',
          value: 0,
          icon: 'ios-baseball-outline',
        },
        {
          name: '宗门秘法·日',
          value: 1,
          icon: 'md-aperture',
        },
        {
          name: '厚土',
          value: 2,
          icon: 'ios-square',
        },
        {
          name: '【禁】大禹之恩·2/天域声望·2礼盒（二选一）',
          value: 3,
          icon: 'md-beer',
        },
        {
          name: '【封】炼化之印·5/天域声望·5礼盒（二选一）',
          value: 4,
          icon: 'ios-medkit',
        },
        {
          name: '七夕礼包半价券',
          value: 5,
          icon: 'ios-heart',
        },
        {
          name: '牵牛花',
          value: 6,
          icon: 'ios-nuclear',
        },
        {
          name: '炼化之印（100）',
          value: 7,
          icon: 'ios-egg',
        },
        {
          name: '尚书令',
          value: 8,
          icon: 'ios-book',
        },
        {
          name: '星晖',
          value: 9,
          icon: 'ios-magnet',
        },
        {
          name: '太阴星光匣',
          value: 10,
          icon: 'md-ionic',
        },
        {
          name: '【禁】鸿蒙玉/天域声望·200礼盒（二选一）',
          value: 21,
          icon: 'md-ionitron',
        },
        {
          name: '迷蝶香宝匣',
          value: 22,
          icon: 'logo-hackernews',
        },
        {
          name: '【八十】白羊座·伤',
          value: 23,
          icon: 'logo-freebsd-devil',
        },
        {
          name: '六道轮回锤',
          value: 24,
          icon: 'ios-hammer',
        },
        {
          name: '乾坤诀',
          value: 25,
          icon: 'ios-clipboard',
        },
        {
          name: '星河流转宝匣',
          value: 26,
          icon: 'md-browsers',
        },
        {
          name: '庄周梦蝶礼盒',
          value: 27,
          icon: 'ios-body',
        },
        {
          name: '陆尘·星贯长虹',
          value: 28,
          icon: 'md-star',
        },
        {
          name: '星贯映辉礼盒',
          value: 29,
          icon: 'ios-train',
        },
        {
          name: '秋水流光（装件）',
          value: 30,
          icon: 'md-transgender',
        },
        {
          name: '泡弟（饰件）',
          value: 31,
          icon: 'ios-umbrella',
        },
        {
          name: '军饷券·1000',
          value: 32,
          icon: 'logo-yahoo',
        },
        {
          name: '军饷券·10000',
          value: 33,
          icon: 'logo-yen',
        },
      ],
      giftsGet: [],
      openNumber: 200,
      giftDisabled: false,
      modalCharge: false
    }
  },
  mounted() {
    this.contentScroll = window.screen.height - 20
    // console.log(this.contentScroll)
    this.getList()
    this.liveInit()
  },
  methods: {
    getList (page) {
      //获取列表
      let params = this.request

      if(parseInt(page) > 0){
        params.page = page;
      }
      console.log(params)
      var vue = this;
      const url = this.$api_host+'getList.py'
      this.$axios.get(url, {
        params: params,
        paramsSerializer: function(params) {
          return vue.$qs.stringify(params, {arrayFormat: 'brackets'})
        },
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
    },
    setOrder (name) {
      switch (parseInt(name)) {
        case 5:
          //总修为
          this.request.orderby = 'all_abilities desc'
          this.orderName = '总修为'
          break;
        case 4:
          //装备评价
          this.request.orderby = 'equipment desc'
          this.orderName = '装备评价'
          break;
        case 3:
          this.request.orderby = 'abilities desc'
          this.orderName = '修为'
          //修为
          break;
        case 2:
          this.request.orderby = 'id desc'
          this.orderName = '最新'
          //最新
          break;
        default:
          this.request.orderby = 'all_abilities desc'
          this.orderName = '默认'
          //默认
          break;
      }
      //清除数据
      this.bangList = []
      this.getList()
    },
    toSource (name) {
      console.log(name)
      switch (parseInt(name)) {
        case 5:
        case 4:
          this.$Message.info('敬请期待')
          break;
        case 3:
          this.modalCharge = true
          break;
        case 2:
          this.modalBox = true
          break;
        default:
          this.modalValue = true
          //默认
          break;
      }
    },
    toValue () {
      //去估价
      if(!this.bang_link){
        return this.$Message.warning('请输入估计角色英雄榜')
      }
      //获取bang_id
      const arrList = this.bang_link.split('/')
      const bang_id = arrList[5]
      var regu =/\d{1,2}_\d{1,10}$/;
      var re = new RegExp(regu);
      var result = re.test(bang_id)
      if(result !== true){
        return this.$Message.warning('请输入正确的角色英雄榜')
      }
      //开始请求
      var vue = this;
      const url = this.$api_host+'evalueate.py'
      const params = {
        bang_id: bang_id
      }
      //重置
      this.valueData = []
      this.loading = true
      console.log(this.loading)
      this.$axios.get(url, {
        params: params,
        paramsSerializer: function(params) {
          return vue.$qs.stringify(params, {arrayFormat: 'brackets'})
        },
      }).then(function(response){
        vue.loading = false
        if(response.status == 200){
          vue.valueData = response.data
          console.log(vue.valueData)
        }else{
          vue.$Message.warning('出错误了');
        }
      }).catch(function(error){
        vue.$Message.error('网络走丢了');
      });
    },
    liveInit () {
      const vue = this
      const url = this.$api_host+'getLiveList.py'
      this.$axios.get(url).then(function(response){
        if(response.status == 200){
          vue.callBackLive(response.data)
          // console.log(vue.valueData, 222)
        }else{
          vue.$Message.warning('出错误了');
        }
      });
    },
    callBackLive (data) {
      const legendData = []
      const seriesData = []
      //生成echarts
      for(let i in data.liveList){

        legendData.push(data.liveList[i][2])
        seriesData.push({name: data.liveList[i][2], value: data.liveList[i][15]})
      }
      this.liveOption.legend.data = legendData
      this.liveOption.series[0].data = seriesData
    },
    liveShow () {
      this.modalLive = true
      const vue = this
      console.log(this.liveOption)
      const chart1 = this.$echarts.init(document.getElementById("chart1"))
      chart1.setOption(vue.liveOption);
    },
    async openGift () {
      //开始开箱子,构造随机开箱子
      const length = this.giftList.length;
      //构造权重随机列表
      const weightArr = []
      let bei = this.optionValue
      console.log(bei, 555)
      for (let i  in this.giftList){
        let number = Math.pow((length - this.giftList[i].value), bei)
        while(number>0){
          weightArr.push(this.giftList[i].value)
          number--
        }
      }
      console.log(weightArr.length)
      //打乱数组下表
      weightArr.sort(function (a, b ) {
        return Math.random() > 0.5 ? -1 : 1;
      })

      let giftsGet = []
      while (this.openNumber > 0){
        const key = this.randomKey(weightArr);
        giftsGet.push(this.giftList[key]);
        this.openNumber--;
        this.dealOpenedGifts(giftsGet)
        await this.sleep(1000)
      }
      this.giftDisabled = false
    },
    randomKey(weightArr){
      const rand = Math.floor( Math.random() * weightArr.length )
      const middle = weightArr.slice(rand, rand +　1)
      return middle[0]
    },
    sleep(millisecond) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, millisecond)
      })
    },
    dealOpenedGifts (giftsGet){
      this.giftDisabled = true
      //整理一下数组吧
      this.giftsGet = []
      //代表没有
      let flag = 1
      for(let j in giftsGet){
        flag = 1
        if(giftsGet[j] == undefined)
          continue
        for(let p in this.giftsGet){
          if(this.giftsGet[p].value == giftsGet[j].value){
            this.giftsGet[p].count += 1
            flag = 0
          }
        }
        if(flag == 1){
          //那就是要重新插入了
          giftsGet[j].count = 1
          this.giftsGet.push(giftsGet[j])
        }
      }

      const middle = this.giftsGet
      let newArr = []
      for(let q in middle){
        let xiabiao = parseInt(q/8)
        if(newArr[xiabiao] == undefined){
          newArr[xiabiao] = []
        }
        newArr[xiabiao].push(middle[q])
      }

      this.giftsGet = JSON.parse(JSON.stringify(newArr))
    },
    clearOpen () {
      if(this.giftDisabled == true){
        this.$Message.warning('您正在开箱过程中，请完成后再尝试');
      }
      this.giftsGet = []
      this.openNumber = 200
    }
  }
}
</script>
<style scoped>
  .li{
    line-height: 25px;
    list-style: none;
  }
  .demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
  }
  @keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
  }
  .demo-spin-col{
    height: 100px;
    position: relative;
    border: 1px solid #eee;
  }
  .text-left{
    text-align: left;
  }
  .text-right{
    text-align: right;
  }
  .text-center{
    text-align: center;
  }
  .font-25{
    font-size: 25px;
  }
  .font-18{
    font-size: 18px;
  }
  .line-height-20{
    line-height: 40px;
  }
  /*开始设计开箱子模式*/
  .row-height-60{
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .row-col-border{
    border: 1px solid #42b983;
    border-radius: 5px 5px 5px 5px;
    height: 60px;
  }
  .demo-badge{
    width: 100%;
    height: 60px;
    background: #eee;
    border-radius: 6px;
    display: inline-block;
  }
  .red{
    color: red;
  }
  .black-red{
    color: darkorange;
  }
</style>
