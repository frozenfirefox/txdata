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
              <DropdownItem name="4">砸钻模拟</DropdownItem>
              <DropdownItem name="5">炼化模拟</DropdownItem>
              <DropdownItem name="6">为她充电</DropdownItem>
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
        <TimelineItem>
          <p class="time">2020-09-03</p>
          <p class="content">更新新增模拟砸钻，砸钻入口：加入我们>>砸钻模拟</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2020-09-04</p>
          <p class="content">更新模拟砸钻添加加护成功音效</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time red">2020-09-04</p>
          <p class="content red">更新模拟炼化简易版</p>
        </TimelineItem>
      </Timeline>
    </Modal>
    <!--估价-->
    <Modal v-model="modalValue"
           fullscreen
           title="估价系统">
      <div class="home">
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
      </div>
    </Modal>
<!--    抽屉日活-->
    <Drawer title="日活统计"  width="100" placement="left" :closable="true" v-model="modalLive">
      <div class="bar" id="chart1" style="width: 400px ;height: 600px"></div>
    </Drawer>

<!--    开箱抽屉-->
    <Drawer title="开箱子（过手瘾）"  width="100" placement="left" :closable="true" v-model="modalBox"  class-name="home">
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
<!--    砸钻系列-->
    <Modal v-model="modalJiahu"
           fullscreen title="砸钻体验器(切勿当真，第一版设计是比较难的希望挑战下自己)">
      <Select v-model="zuanValue" style="width:200px">
        <Option v-for="item in modeList" :value="item.value" :key="item.value">{{ item.name }}</Option>
      </Select>
      <divider/>
      <div class="tianxiabg">
        <Row type="flex" justify="start" class="code-row-bg">
          <Col span="8" class="shop">
            <span class="ri-buy" @click="addZuan(0)"></span>
            <span class="zu-ri-buy" @click="addZuanZu(0)"><Button type="primary" size="small">+20</Button></span>
            <span class="yue-buy" @click="addZuan(1)"></span>
            <span class="zu-yue-buy" @click="addZuanZu(1)"><Button type="primary" size="small">+20</Button></span>
            <span class="lei-buy" @click="addZuan(2)"></span>
            <span class="zu-lei-buy" @click="addZuanZu(2)"><Button type="primary" size="small">+20</Button></span>
            <span class="hong-buy" @click="addZuan(3)"></span>
            <span class="zu-hong-buy" @click="addZuanZu(3)"><Button type="primary" size="small">+20</Button></span>
          </Col>
          <Col span="8" class="arm">
            <p class="jiahubg">
              <span class="jiahuPer" :style="'width: '+jiahuValue+'px'"></span>
            </p>
          </Col>
          <Col span="8" class="bag">
            <span class="ri-zuan" @click="addJiahu(0)">
              <p class="xiabiao">{{zuanList[0].num}}</p>
            </span>
            <span class="yue-zuan" @click="addJiahu(1)">
              <p class="xiabiao">{{zuanList[1].num}}</p>
            </span>
            <span class="lei-zuan" @click="addJiahu(2)">
              <p class="xiabiao">{{zuanList[2].num}}</p>
            </span>
            <span class="hong-zuan" @click="addJiahu(3)">
              <p class="xiabiao">{{zuanList[3].num}}</p>
            </span>

            <span class="used-money">
              {{countUsed}}
            </span>
            <span class="yuan-money">
              {{countYuan}}
            </span>
            <span class="all-money">
              {{zuanMoney.allMoney}}
            </span>
          </Col>
        </Row>
      </div>
    </Modal>
    <audio :src="mp3Suc" id="video" ref="video"></audio>
<!--    炼化模拟-->
    <Modal v-model="modalLianhua"
           fullscreen title="炼化模拟(切勿当真，第一版设计是比较难的希望挑战下自己)">
      <!--<Select v-model="zuanValue" style="width:200px">-->
        <!--<Option v-for="item in modeList" :value="item.value" :key="item.value">{{ item.name }}</Option>-->
      <!--</Select>-->
      <p>新增炼化模拟，大锁持续添加中</p>
      <divider/>
      <div class="tianxiabg">
        <Row type="flex" justify="start" class="code-row-bg">
          <Col span="12" class="shop-lian">
            <span class="shop-lian-yin-20"></span>
            <span class="shop-lian-yin-100"></span>
            <span class="ri-buy" @click="addLian(0)"></span>
            <span class="zu-ri-buy" @click="addLianZu(0)"><Button type="primary" size="small">+20</Button></span>
            <span class="yue-buy" @click="addLian(1)"></span>
            <span class="zu-yue-buy" @click="addLianZu(1)"><Button type="primary" size="small">+20</Button></span>
          </Col>
          <Col span="12" class="bag-lian">
            <p class="xiaohao-lian">{{lianXiaohao}}</p>
            <p class="yongyou-lian">{{countLianHad}}</p>
            <p class="xiaohao-all">剩余元宝：{{lianMoney.allMoney}}</p>
            <p class="xiaohao-yuan">实际消耗元宝：{{countLianUsed}}</p>
            <p class="xiaohao-ren">实际消耗人民币：{{countLianYuan}}</p>
            <p class="start-lian" @click="lianHua"></p>
            <p class="start-lian-bao-left" @click="lianBao(0)"><Button type="primary">保留旧属性</Button></p>
            <p class="start-lian-bao-right" @click="lianBao(1)"><Button type="info">保留新属性</Button></p>
            <span class="start-lian-old">
              <p class="p-16">{{lianOld.one}}</p>
              <p class="p-16">{{lianOld.two}}</p>
              <p class="p-16">{{lianOld.three}}</p>
              <p class="p-16">{{lianOld.four}}</p>
              <p class="p-16">{{lianOld.five}}</p>
            </span>
            <span class="start-lian-new">
              <p class="p-16">{{lianNew.one}}</p>
              <p class="p-16">{{lianNew.two}}</p>
              <p class="p-16">{{lianNew.three}}</p>
              <p class="p-16">{{lianNew.four}}</p>
              <p class="p-16">{{lianNew.five}}</p>
            </span>
            <span class="start-lian-arm">
              <Tooltip placement="bottom-end">
              <Button class=""></Button>
              <div slot="content">
                <p class="start-lian-arm-pic"></p>
              </div>
            </Tooltip>
            </span>
          </Col>
        </Row>
      </div>
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
      modalCharge: false,
      modalJiahu: false,
      zuanList: [
        {
          name: '日钻',
          num: 0,
          price: 2,
          section: [1,2,3,4,5,6],
        },
        {
          name: '月钻',
          num: 0,
          price: 20,
          section: [4,5,6,7,8,9,10,11],
        },
        {
          name: '雷钻',
          num: 0,
          price: 200,
          section: [9,10,11,12,13,14,15,16],
        },
        {
          name: '红钻',
          num: 0,
          price: 3300,
          section: [14,15,16,17,18,19,20],
        }
      ],
      jiahuValue: 0,
      zuanMoney: {
        moneyInit: 5000000,
        allMoney: 5000000,
      },
      zuanValue: 1,
      mp3Suc: '',
      //开始炼化
      modalLianhua: false,
      lianList: [
        {
          name: '炼化之印·20',
          num: 0,
          price: 20,
        },
        {
          name: '炼化之印·100',
          num: 0,
          price: 100,
        }
      ],
      lianMoney: {
        moneyInit: 5000000,
        allMoney: 5000000,
      },
      lianOld: {
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
      },
      lianNew: {
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
      },
      fiveOriginList: [
        {name: '回环剑', type:  1},
        {name: '断魂剑', type:  1},
        {name: '饮血剑', type:  1},
        {name: '残影剑', type:  1},
        {name: '疾影剑', type:  1},
        {name: '狂影剑', type:  1},
        {name: '失明卷', type:  1},
        {name: '强攻卷', type:  2},
        {name: '化血卷', type:  2},
        {name: '暗器卷', type:  1},
        {name: '解体卷', type:  1},
        {name: '影杀卷', type:  1},
        {name: '影遁', type:  2},
        {name: '地行', type:  2},
        {name: '疾闪', type:  2},
        {name: '缠身', type:  2},
        {name: '催命', type:  2},
        {name: '百影', type:  1},
        {name: '山河震', type:  2},
        {name: '鬼神震', type:  1},
        {name: '金玉震', type:  1},
        {name: '天地震', type:  1},
        {name: '飞星震', type:  1},
        {name: '仙魔震', type:  1},
        {name: '暴怒', type:  2},
        {name: '长生', type:  2},
        {name: '断吼', type:  2},
        {name: '暴走', type:  2},
        {name: '破胆', type:  2},
        {name: '钢身', type:  2},
        {name: '疾', type:  1},
        {name: '破', type:  1},
        {name: '截', type:  1},
        {name: '伤', type:  1},
        {name: '狂', type:  2},
        {name: '开', type:  1},
        {name: '火炎珠', type:  1},
        {name: '火吟法', type:  2},
        {name: '火三昧', type:  1},
        {name: '火地眩', type:  1},
        {name: '火炎凤', type:  1},
        {name: '火天罚', type:  1},
        {name: '水凝身', type:  1},
        {name: '水吟法', type:  2},
        {name: '水缓行', type:  1},
        {name: '水入梦', type:  2},
        {name: '水乱弹', type:  1},
        {name: '水狂法', type:  1},
        {name: '风雷触', type:  1},
        {name: '风吟法', type:  2},
        {name: '风卷云', type:  1},
        {name: '风腾云', type:  2},
        {name: '风刃散', type:  1},
        {name: '风七雷', type:  1},
        {name: '错骨', type:  1},
        {name: '止行', type:  1},
        {name: '失心', type:  1},
        {name: '放血', type:  1},
        {name: '润脉', type:  2},
        {name: '调气', type:  2},
        {name: '妙手回春', type:  2},
        {name: '心清神明', type:  2},
        {name: '固本培元', type:  2},
        {name: '逆转丹行', type:  2},
        {name: '七星唤魂', type:  2},
        {name: '八门化伤', type:  2},
        {name: '九心海棠', type:  1},
        {name: '鬼哭藤', type:  1},
        {name: '赤孔雀胆', type:  1},
        {name: '醉梦仙花', type:  1},
        {name: '断肠腐骨草', type:  1},
        {name: '墨罂粟', type:  1},
        {name: '三阳真火诀', type:  1},
        {name: '六合寒水诀', type:  1},
        {name: '五方浩风诀', type:  1},
        {name: '八荒地煞诀', type:  2},
        {name: '七曜人寰诀', type:  1},
        {name: '九玄天元诀', type:  1},
        {name: '炫炎', type:  1},
        {name: '听雨', type:  2},
        {name: '流风', type:  1},
        {name: '归元', type:  1},
        {name: '幻心', type:  2},
        {name: '兵解', type:  2},
        {name: '道生火', type:  1},
        {name: '上善若水', type:  2},
        {name: '有归于无', type:  1},
        {name: '曲则全', type:  2},
        {name: '身自在', type:  2},
        {name: '观其妙', type:  1},
        {name: '玄龟真言', type:  2},
        {name: '白虎真言', type:  2},
        {name: '青麒真言', type:  2},
        {name: '丹鹤真言', type:  2},
        {name: '炎凤真言', type:  2},
        {name: '邪影真言', type:  2},
        {name: '回生真诀', type:  2},
        {name: '神速真诀', type:  2},
        {name: '缚足真诀', type:  1},
        {name: '郁风真诀', type:  1},
        {name: '重生真诀', type:  2},
        {name: '心魔真诀', type:  2},
        {name: '退鬼符', type:  1},
        {name: '斩妖诀', type:  1},
        {name: '定身咒', type:  1},
        {name: '观心咒', type:  1},
        {name: '破技符', type:  1},
        {name: '符惊鬼神', type:  1},
        {name: '繁星碎', type:  1},
        {name: '铁歌行', type:  2},
        {name: '流光鸣', type:  1},
        {name: '飞云断', type:  1},
        {name: '金戈吟', type:  1},
        {name: '山河壮', type:  2},
        {name: '黄云堆雪', type:  1},
        {name: '挑灯看剑', type:  1},
        {name: '铁马秋风', type:  1},
        {name: '狼烟夜举', type:  2},
        {name: '关山梦断', type:  1},
        {name: '暴虎冯河', type:  1},
        {name: '地载阵', type:  2},
        {name: '蛇蟠阵', type:  2},
        {name: '虎翼阵', type:  2},
        {name: '鸟翔阵', type:  2},
        {name: '云垂阵', type:  2},
        {name: '龙飞阵', type:  2},
        {name: '风驰篇', type:  2},
        {name: '发劲篇', type:  2},
        {name: '驯鹰篇', type:  2},
        {name: '疾行篇', type:  2},
        {name: '弓术篇', type:  2},
        {name: '凝神篇', type:  2},
        {name: '冻霜寒陷阱', type:  1},
        {name: '冻霜寒陷阱', type:  1},
        {name: '绿蛛丝陷阱', type:  1},
        {name: '噬魔草陷阱', type:  1},
        {name: '赤蝎粉陷阱', type:  1},
        {name: '火油桐陷阱', type:  1},
        {name: '藤葛', type:  1},
        {name: '梨花', type:  1},
        {name: '芭蕉', type:  1},
        {name: '倦鸟', type:  1},
        {name: '火蜥', type:  2},
        {name: '夜狼', type:  1},
        {name: '新梢满林', type:  2},
        {name: '独坐幽篁', type:  2},
        {name: '琼节高吹', type:  2},
        {name: '风玉敲秋', type:  2},
        {name: '繁荫郁郁', type:  2},
        {name: '残阴余韵', type:  2},
        {name: '阎罗司刑', type:  1},
        {name: '孟婆斟汤', type:  2},
        {name: '府君勾魂', type:  1},
        {name: '钟馗怒撼', type:  1},
        {name: '秦广贯月', type:  1},
        {name: '玉碎九渊', type:  1},
        {name: '夙影浣火', type:  1},
        {name: '夜明战歌', type:  2},
        {name: '怀光饲命', type:  1},
        {name: '困兽刑牢', type:  1},
        {name: '幻雾迷踪', type:  2},
        {name: '望舒降世', type:  1},
        {name: '龙刃蚀心', type:  1},
        {name: '龙战于野', type:  1},
        {name: '游龙摆尾', type:  1},
        {name: '怒龙之袭', type:  1},
        {name: '沧海龙吟', type:  1},
        {name: '龙息涤魂', type:  2},
        {name: '九命灵心', type:  2},
        {name: '绿野流沼', type:  1},
        {name: '灵歌锁心', type:  1},
        {name: '碎荧流袂', type:  2},
        {name: '蝶舞幻离', type:  1},
        {name: '寒水磷光', type:  1},
        {name: '背水殇歌', type:  1},
        {name: '蜃影幻镜', type:  2},
        {name: '亢龙无悔', type:  1},
        {name: '龙血之契', type:  2},
        {name: '斗转参横', type:  1},
        {name: '龙行天下', type:  1},
        {name: '修竹', type:  2},
        {name: '繁花', type:  2},
        {name: '魅妖', type:  2},
        {name: '镜影', type:  2},
        {name: '塔灵', type:  2},
        {name: '墨之殇', type:  2},
        {name: '洒墨', type:  1},
        {name: '墨灵', type:  2},
        {name: '墨染缠绵', type:  1},
        {name: '潜移墨化', type:  2},
        {name: '墨龙凌空', type:  1},
        {name: '血墨杀', type:  1},
        {name: '鬼蜮', type:  1},
        {name: '鬼影', type:  2},
        {name: '鬼息', type:  2},
        {name: '鬼迷心窍', type:  1},
        {name: '鬼出神没', type:  1},
        {name: '鬼泣', type:  1}
      ],
      fiveList: [],
      fourList: [
        {name: '最大物理攻击力：+', section: [10, 15]},
        {name: '最小物理攻击力：+', section: [10, 15]},
        {name: '最大法术攻击力：+', section: [10, 15]},
        {name: '最小法术攻击力：+', section: [10, 15]},
        {name: '物理防御力：+', section: [10, 15]},
        {name: '法术防御力：+', section: [10, 15]}
      ],
      threeList: [
        {name: '追电：移动速度加成力上升', section: [18, 60]},
        {name: '疾语：吟唱速度加成力上升', section: [18, 60]},
        {name: '骤雨：攻击速度加成力上升', section: [18, 60]},
        {name: '神明：施法保护力和会心防护力上升', section: [18, 60]},
        {name: '扰心：施法打断力上升', section: [18, 60]},
        {name: '明思：技力消耗力减少', section: [18, 60]}
      ],
      twoList: [
        {name: '白刃：挥砍重击上升#@#', section: [10, 20]},
        {name: '阴伤：穿刺重击上升#@#', section: [10, 20]},
        {name: '崩击：钝击重击上升#@#', section: [10, 20]},
        {name: '猛毒：毒系重击上升#@#', section: [10, 20]},
        {name: '真元：元系重击上升#@#', section: [10, 20]},
        {name: '爆炎：火系重击上升#@#', section: [10, 20]},
        {name: '怒涛：水系重击上升#@#', section: [10, 20]},
        {name: '狂风：风系重击上升#@#', section: [10, 20]},
        {name: '御火：火系化解上升#@#', section: [10, 20]},
        {name: '御水：水系化解上升#@#', section: [10, 20]},
        {name: '御风：风系化解上升#@#', section: [10, 20]},
        {name: '御元：元系化解上升#@#', section: [10, 20]},
        {name: '御毒：毒系化解上升#@#', section: [10, 20]},
        {name: '不动：钝击化解上升#@#', section: [10, 20]},
        {name: '卸刃：挥砍化解上升#@#', section: [10, 20]},
        {name: '金刚：穿刺化解上升#@#', section: [10, 20]},
        {name: '附加#@#点火伤', section: [10, 20]},
        {name: '附加#@#点水伤', section: [10, 20]},
        {name: '附加#@#点风伤', section: [10, 20]},
        {name: '附加#@#点毒伤', section: [10, 20]},
        {name: '附加#@#点元伤害', section: [10, 20]}
      ],
      oneList: [
        {name: '力 +', section: [10, 35]},
        {name: '敏 +', section: [10, 35]},
        {name: '魂 +', section: [10, 35]},
        {name: '体 +', section: [10, 35]},
        {name: '疾 +', section: [10, 35]},
        {name: '念 +', section: [10, 35]}
      ],
      lianXiaohao: 150
    }
  },
  mounted() {
    this.contentScroll = window.screen.height - 20
    // console.log(this.contentScroll)
    this.getList()
    this.liveInit()
  },
  computed: {
    countUsed () {
      let hadMoney = this.zuanList[0].num*2 + this.zuanList[1].num*20 + this.zuanList[2].num*200 + this.zuanList[3].num*3300
      let usedMoney = this.zuanMoney.moneyInit - this.zuanMoney.allMoney
      // console.log(hadMoney, usedMoney, this.zuanMoney.allMoney, usedMoney)
      return (usedMoney - hadMoney)
    },
    countYuan () {
      let hadMoney = this.zuanList[0].num*2 + this.zuanList[1].num*20 + this.zuanList[2].num*200 + this.zuanList[3].num*3300
      let usedMoney = this.zuanMoney.moneyInit - this.zuanMoney.allMoney
      return ((usedMoney - hadMoney)/10).toFixed(2)
    },
    countLianUsed () {
      let hadMoney = this.lianList[0].num*20 + this.lianList[1].num*100
      let usedMoney = this.lianMoney.moneyInit - this.lianMoney.allMoney
      // console.log(hadMoney, usedMoney, this.lianMoney.allMoney, usedMoney)
      return (usedMoney - hadMoney)
    },
    countLianYuan () {
      let hadMoney = this.lianList[0].num*20 + this.lianList[1].num*100
      let usedMoney = this.lianMoney.moneyInit - this.lianMoney.allMoney
      return ((usedMoney - hadMoney)/10).toFixed(2)
    },
    countLianHad () {
      return (this.lianList[0].num*20 + this.lianList[1].num*100)
    }
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
      this.mp3Suc = require('../assets/voice/zuan_suc.mp3')
      switch (parseInt(name)) {
        case 6:
          this.$Message.info('敬请期待')
          break;
        case 5:
          //炼化模拟
          this.initFiveList()
          this.modalLianhua = true
          break;
        case 4:
          this.modalJiahu = true
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
    },
    addZuan (type) {
      if(this.zuanMoney.allMoney < this.zuanList[type].price){
        this.$Message.warning('糟糕了，您的钱已经不够用了');
        return false;
      }
      this.zuanList[type].num++
      this.zuanMoney.allMoney -= this.zuanList[type].price
    },
    addZuanZu (type) {
      if(this.zuanMoney.allMoney < this.zuanList[type].price*20){
        this.$Message.warning('糟糕了，您的钱已经不够用了');
        return false;
      }
      this.zuanList[type].num += 20
      this.zuanMoney.allMoney -= this.zuanList[type].price*20
    },
    addJiahu (type) {

      let forward = parseInt(this.jiahuValue/8) + 1;
      if(this.zuanList >= 160){
        this.$Message.warning('您已经达到人生巅峰了，请开启新的征程吧')
        return false
      }
      if(this.zuanList[type].section.indexOf(forward) < 0){
        this.$Message.warning('请选择合适的加护溟钻')
        return false
      }

      if(this.zuanList[type].num <= 0){
        this.$Message.warning('请购买加护溟钻')
        return false
      }

      //开始加护
      let bei = this.zuanValue
      console.log(bei)
      let length = Math.max(...this.zuanList[type].section) + Math.abs(bei - 4)
      let weightArr = []
      for (let i  in this.zuanList[type].section){
        let number = Math.pow((length - this.zuanList[type].section[i]), bei)
        while(number>0){
          weightArr.push(this.zuanList[type].section[i])
          number--
        }
      }
      // console.log(weightArr)
      //打乱数组下表
      weightArr.sort(function (a, b ) {
        return Math.random() > 0.5 ? -1 : 1;
      })

      let key = this.randomKey(weightArr)
      let flag = 1
      switch (type) {
        case 3:
          flag = 18
          break;
        case 2:
          flag = 13
          break;
        case 1:
          flag = 8
          break;
        default:
          flag = 3
          break;
      }
      if(weightArr[key] >= parseInt(this.jiahuValue/8) || parseInt(this.jiahuValue/8) < flag){
        this.jiahuValue += 8
        this.$refs.video.play()
        if(this.jiahuValue == 160){
          this.$Message.success("太厉害了少侠，您已经达到人生巅峰了，惊世骇俗，装备加护到了20钻，请开启新的征程吧!")
        }
      }else{
        this.jiahuValue > 8?this.jiahuValue -= 8:this.jiahuValue = 8
      }
      //加护
      this.zuanList[type].num--
    },
    addLian (type){
      if(this.lianMoney.allMoney < this.lianList[type].price){
        this.$Message.warning('糟糕了，您的钱已经不够用了');
        return false;
      }
      this.lianList[type].num++
      this.lianMoney.allMoney -= this.lianList[type].price
    },
    addLianZu (type) {
      if(this.lianMoney.allMoney < this.lianList[type].price*20){
        this.$Message.warning('糟糕了，您的钱已经不够用了');
        return false;
      }
      this.lianList[type].num += 20
      this.lianMoney.allMoney -= this.lianList[type].price*20
    },
    //核心公式计算炼化
    lianHua (){
      let xiaohao = this.lianXiaohao
      let had = this.countLianHad
      // console.log(xiaohao, had)
      if(xiaohao > had){
        this.$Message.warning('糟糕了，您炼化声望消耗殆尽，请购买');
        return false
      }
      this.$refs.video.play()
      if(this.lianNew.one != ''){
        this.$Message.warning('请先选择保留新炼化属性或者旧炼化属性')
        return false
      }
      //开始组装五条
      let tiaoshu = this.rangeInt(1, 5)
      for(let i = 1; i<=tiaoshu; i++ ){
        switch (parseInt(i)) {
          case 5:
            this.lianNew.five = this.dealFive()
            break;
          case 4:
            this.lianNew.four = this.dealFour()
            break;
          case 3:
            this.lianNew.three = this.dealThree()
            break;
          case 2:
            this.lianNew.two = this.dealTwo()
            break;
          default:
            this.lianNew.one = this.dealOne()
            break;
        }
      }
    },
    rangeInt(minNum, maxNum){
      switch(arguments.length){
        case 1:
          return parseInt(Math.random()*minNum+1,10);
          break;
        case 2:
          return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
          break;
        default:
          return 0;
          break;
      }
    },
    lianBao (type){
      if(type == 1){
        this.lianOld = JSON.parse(JSON.stringify(this.lianNew))
      }
      this.lianNew.one = ''
      this.lianNew.two = ''
      this.lianNew.three = ''
      this.lianNew.four = ''
      this.lianNew.five = ''
    },
    initFiveList (){
      let fiveList = []
      for(let i in this.fiveOriginList){
        //开始处理
        if(this.fiveOriginList[i].type == 1){
          //有两条插入，否则一条
          let jineng = {
            name: this.fiveOriginList[i].name + ': 技能威力增加',
            section: [0.5, 1, 1.5, 2]
          }
          fiveList.push(jineng)
        }
        let jili = {
          name: this.fiveOriginList[i].name + ': 技力值消耗减少',
          section: [1, 2, 3, 4]
        }
        fiveList.push(jili)
      }
      this.fiveList = JSON.parse(JSON.stringify(fiveList))
      // console.log(this.fiveList)
    },
    dealFive (){
      let fiveList = this.fiveList
      let length = fiveList.length
      let xiabiao = this.rangeInt(0, length - 1)
      let fiveSingle = fiveList[xiabiao]
      let numXiabiao = this.rangeInt(0, fiveSingle.section.length - 1)
      return fiveSingle.name + fiveSingle.section[numXiabiao] + '%'
    },
    dealFour (){
      let fourList = this.fourList
      let length = fourList.length
      let xiabiao = this.rangeInt(0, length - 1)
      let fourSingle = fourList[xiabiao]
      let number = this.rangeInt(fourSingle.section[0], fourSingle.section[1])
      return fourSingle.name + number
    },
    dealThree (){
      let threeList = this.threeList
      let length = threeList.length
      let xiabiao = this.rangeInt(0, length - 1)
      let threeSingle = threeList[xiabiao]
      let number = this.rangeInt(threeSingle.section[0], threeSingle.section[1])
      return threeSingle.name + number
    },
    dealTwo (){
      let twoList = this.twoList
      let length = twoList.length
      let xiabiao = this.rangeInt(0, length - 1)
      let twoSingle = twoList[xiabiao]
      let number = this.rangeInt(twoSingle.section[0], twoSingle.section[1])
      return twoSingle.name.replace('#@#', number)
    },
    dealOne (){
      let oneList = this.oneList
      let length = oneList.length
      let xiabiao = this.rangeInt(0, length - 1)
      let oneSingle = oneList[xiabiao]
      let number = this.rangeInt(oneSingle.section[0], oneSingle.section[1])
      return oneSingle.name + number
    }
  }
}
</script>
<style scoped>
  .home{
    background: url("../assets/img/mainbg.jpg") repeat-y center;
  }
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
    color: #ff0000;
  }
  .black-red{
    color: #ff8c00;
  }
  .tianxiabg{
    background: url("../assets/img/mainbg.jpg");
  }
  .shop{
    position: relative;
    background: url("../assets/img/jiahu/shop.jpg") no-repeat center;
    height: 465px;
  }
  .bag{
    background: url("../assets/img/jiahu/bag.jpg") no-repeat center;
    height: 465px;
  }
  .arm{
    background: url("../assets/img/jiahu/arm.png") no-repeat center;
    height: 465px;
  }
  .ri-buy{
    position: absolute;
    left: calc(50% - 98px);
    top: 116px;
    width: 63px;
    height: 33px;
  }
  .zu-ri-buy{
    position: absolute;
    left: calc(50% - 25px);
    top: 118px;
    width: 63px;
    height: 33px;
  }
  .yue-buy{
    position: absolute;
    left: calc(50% - 98px);
    top: 216px;
    width: 63px;
    height: 33px;
  }
  .zu-yue-buy{
    position: absolute;
    left: calc(50% - 25px);
    top: 221px;
    width: 63px;
    height: 33px;
  }
  .lei-buy{
    position: absolute;
    left: calc(50% - 98px);
    top: 316px;
    width: 63px;
    height: 33px;
  }
  .zu-lei-buy{
    position: absolute;
    left: calc(50% - 25px);
    top: 324px;
    width: 63px;
    height: 33px;
  }
  .hong-buy{
    position: absolute;
    left: calc(50% - 98px);
    top: 426px;
    width: 63px;
    height: 33px;
  }
  .zu-hong-buy{
    position: absolute;
    left: calc(50% - 25px);
    top: 426px;
    width: 63px;
    height: 33px;
  }
  .ri-zuan{
    position: absolute;
    left: calc(50% - 12px);
    top: 64px;
    width: 32px;
    height: 32px;
  }
  .yue-zuan{
    position: absolute;
    left: calc(50% - 12px);
    top: 106px;
    width: 32px;
    height: 32px;
  }
  .lei-zuan{
    position: absolute;
    left: calc(50% - 12px);
    top: 147px;
    width: 32px;
    height: 32px;
  }
  .hong-zuan{
    position: absolute;
    left: calc(50% - 12px);
    top: 188px;
    width: 32px;
    height: 32px;
  }
  .xiabiao{
    position: relative;
    top: 18px;
    left: 18px;
    font-size: 12px;
    color: #eeeeee;
  }
  .jiahubg{
    position: absolute;
    left: calc(50% - 80px);
    background: url("../assets/img/jiahu/jiahu.jpg") no-repeat;
    top: 348px;
    width: 160px;
    height: 12px;
  }
  .jiahuPer{
    background: url("../assets/img/jiahu/jiahu.jpg") no-repeat left -12px;
    height: 12px;
    display: block;
  }
  .all-money{
    position: absolute;
    left: calc(50% - 120px);
    top: 422px;
    width: 60px;
    height: 32px;
    line-height: 32px;
    color: #fa990c;
    font-weight: bold;
  }
  .used-money{
    position: absolute;
    left: calc(50% - 70px);
    top: 392px;
    width: 60px;
    height: 32px;
    line-height: 32px;
    color: #fa990c;
    font-weight: bold;
  }
  .yuan-money{
    position: absolute;
    left: calc(50% + 55px);
    top: 392px;
    width: 60px;
    height: 32px;
    line-height: 32px;
    color: #fa990c;
    font-weight: bold;
  }
  /*开始设计炼化模拟*/
  .shop-lian{
    position: relative;
    background: url("../assets/img/lianhua/shop.jpg") no-repeat center;
    height: 465px;
  }
  .shop-lian-yin-20{
    position: absolute;
    left: calc(50% - 90px);
    top: 70px;
    width: 30px;
    height: 31px;
    background: url("../assets/img/lianhua/20-yin.png") no-repeat center;
  }
  .shop-lian-yin-100{
    position: absolute;
    left: calc(50% - 91px);
    top: 170px;
    width: 30px;
    height: 30px;
    background: url("../assets/img/lianhua/100-yin.png") no-repeat center;
  }
  .bag-lian{
    position: relative;
    background: url("../assets/img/lianhua/lian_bg.jpg") no-repeat center;
    height: 528px;
  }
  .yongyou-lian{
    position: absolute;
    left: calc(50% - 10px);
    top: 315px;
    width: 160px;
    height: 16px;
    line-height: 16px;
    color: aliceblue;
  }
  .xiaohao-lian{
    position: absolute;
    left: calc(50% - 10px);
    top: 285px;
    width: 160px;
    height: 16px;
    line-height: 16px;
    color: aliceblue;
  }
  .xiaohao-all{
    position: absolute;
    left: calc(50% - 300px);
    top: 60px;
    width: 160px;
    height: 16px;
    line-height: 16px;
    color: darkorange;
  }
  .xiaohao-yuan{
    position: absolute;
    left: calc(50% - 300px);
    top: 90px;
    width: 160px;
    height: 16px;
    line-height: 16px;
    color: darkorange;
  }
  .xiaohao-ren{
    position: absolute;
    left: calc(50% - 300px);
    top: 120px;
    width: 160px;
    height: 16px;
    line-height: 16px;
    color: darkorange;
  }
  .start-lian{
    position: absolute;
    left: calc(50% - 57px);
    top: 476px;
    width: 126px;
    height: 35px;
  }
  .start-lian-bao-left{
    position: absolute;
    left: calc(50% - 265px);
    top: 476px;
    width: 126px;
    height: 35px;
  }
  .start-lian-bao-right{
    position: absolute;
    left: calc(50% + 151px);
    top: 476px;
    width: 126px;
    height: 35px;
  }
  .start-lian-old{
    position: absolute;
    left: calc(50% - 316px);
    top: 212px;
    width: 160px;
  }
  .start-lian-new{
    position: absolute;
    left: calc(50% + 113px);
    top: 212px;
    width: 160px;
  }
  .p-16{
    font-size: 12px;
    line-height: 26px;
    color: #00ff00;
  }
  .start-lian-arm{
    position: absolute;
    left: calc(50% - 7px);
    top: 102px;
  }
  .start-lian-arm-pic{
    width: 274px;
    height: 415px;
    background: url("../assets/img/lianhua/arm.png");
  }
</style>
