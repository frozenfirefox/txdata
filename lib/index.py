from web import Html
from TableConst import TableConst

#开始执行数据入库等

#开始查询的url
url = "http://bang.tx3.163.com/bang/ranks?order_key=xiuwei"

#服务器大区等
sectorList = ['所有大区','69级专区','74级专区','79级专区','上海区','北京区','启天之路','四川区','天下一统','山东区','广东区','江苏区','河南区','湖北区','福建区','荣耀大荒','辽宁区','陕西区']

#server
serverList = [
    ['所有服务器'],
    ['逍遥三界'],
    ['笑看风云'],
    ['飞鸿踏雪'],
    ['东方明珠'],
    ['紫禁之巅'],
    ['一诺山海', '姑苏流风', '梦回山海', '绝代风华', '锦绣花朝', '问鼎天下', '鼎立山河'],
    ['天府之国'],
    ['墨倾天下', '天下无双', '情动大荒', '昆仑变', '琉璃月'],
    ['齐鲁天下'],
    ['剑舞香江', '白云山'],
    ['瘦西湖'],
    ['逐鹿中原'],
    ['荒火山神', '黄鹤楼'],
    ['武夷九曲'],
    ['上善若水', '君临天下', '幻龙诀', '气壮山河', '飞龙在天'],
    ['烽火关东'],
    ['盛世长安']
]

#传递参数
web = Html(url, sectorList, serverList)
#初始化表
# web.initTable()

# web.createTable(TableConst.SellName(), TableConst.SellTable())
#开始处理跑数据
web.main()
