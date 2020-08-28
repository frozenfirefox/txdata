#!/usr/bin/python
import requests
import os
from bs4 import BeautifulSoup
import time
import json
import re
from selenium import webdriver

#自己库
import img
import db
from TableConst import TableConst
import function

def to_int(str):
    try:
        int(str)
        return int(str)
    except ValueError: #报类型错误，说明不是整型的
        try:
            float(str) #用这个来验证，是不是浮点字符串
            return int(float(str))
        except ValueError:  #如果报错，说明即不是浮点，也不是int字符串。   是一个真正的字符串
            return 0

def return_list(data, count, page, pageSize):
    returnData = {}
    returnData['list'] = data
    returnData['page'] = page
    returnData['pageSize'] = pageSize
    returnData['totalNumber'] = count
    return returnData

class Html:
    #初始化函数，目前只给定一个url链接
    def __init__(self, url, sector = [], server = []):
        self.mydb = db.Db('tx.db')
        self.url = url
        #初始化数据
        self.sector = sector
        self.server = server
        # print(1)
        self.headers = {
            'Accept':'image/webp,image/apng,image/*,*/*;q=0.8',
            'Accept-Encoding':'gzip, deflate',
            'Accept-Language':'zh-CN,zh;q=0.9',
            'Connection':'keep-alive',
            'Host': 'i.meizitu.net',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36'
        }

    #content是beautifusoup 对象
    def Images(self, content):
        bs4Html = BeautifulSoup(content, "lxml")
        imgList = bs4Html.find_all('img')
        for item in imgList:
            file_name = './image/' + item['src'].split('/')[-1]
            imgMylib= img.Img(file_name, item['src'].replace('//', 'https://'))
            imgMylib.main()

    #处理tr数据
    def Data(self, content):
        bs4Html = BeautifulSoup(content, "lxml")
        trList = bs4Html.find_all('tr')
        #print(trList)
        outindex = 0
        for item in trList:
            if outindex == 0:
                outindex = outindex+1
                continue
            #开始进入字段循环
            trString = ''
            sqlString = ''
            index = 0
            for cell in item.find_all('td'):
                #如果是下标为1就放弃
                if index == 0:
                    index = index+1
                    continue
                    
                #处理一下榜信息
                if index == 1:
                    bang_id = cell.find('a')['href'].split('/')[-1]
                    prefix = ''
                    sqlString = sqlString+prefix+"'"+bang_id+"'"
                    prefix = ','

                sqlString = sqlString+prefix+"'"+(cell.get_text())+"'"
                # trString = trString+'    '+str(cell.get_text()
                #自增
                index = index+1

            self.dealInsert(bang_id, sqlString)
            # self.WriteFile('./bang/bang.me', trString, 'bang')
            # tdList = item.find_all('td').get_text()

    #最大分页数   
    def Page(self, content):
        bs4Html = BeautifulSoup(content, "lxml")
        pageList = bs4Html.select('div > a')
        max_page = 1
        for item in pageList:
            if to_int(item.get_text()) >= max_page:
                max_page = to_int(item.get_text())  
        return max_page

    #write file 
    def WriteFile(self, name, content, dir = 'bang'):
        img_file_name = name
        if not os.path.exists(dir):
            os.mkdir(dir)
        with open(img_file_name, 'a+', encoding='utf-8') as f:
            f.write(content+'\r\n')

    #main方法
    def main(self):
        content = requests.get(self.url).text
        #self.Images(content) 
        # max_page = (25 > 1)?25:self.Page(content)
        max_page = 25
        #urllist 
        #先处理服务器
        sectorList = self.mydb.select(TableConst.SectorName(), where = '', fields = '*', page = 1, pageSize = 1000)
        #循环处理
        for sector in sectorList:
            serverList = self.mydb.select(TableConst.ServerName(), where = "pid = "+str(sector[0]), fields = '*', page = 1, pageSize = 1000)
            for server in serverList:
                #开始处理爬虫程序
                for num in range(1, (max_page + 1)):
                    inurl = self.url+'&page='+ str(num)+'&sector='+ sector[1] + '&server='+ server[2]
                    print(inurl)
                    content = requests.get(inurl).text
                    self.Data(content)
                    time.sleep(0.5)
        #循环处理
        print("finished data: ")

    def initTable(self):
        infoSql = TableConst.InfoTable()
        result = self.mydb.createTable(infoSql)
        sectorSql = TableConst.SectorTable()
        result = self.mydb.createTable(sectorSql)
        serverSql = TableConst.ServerTable()
        result = self.mydb.createTable(serverSql)
        infoRepeatSql = TableConst.InfoRepeatTable()
        result = self.mydb.createTable(infoRepeatSql)
        # print(result)
        # # print(result)
        # tables = mydb.execute("select name from sqlite_master where type='table' order by name")
        # print(tables)
        # # result = mydb.execute("select * from info")
        # result = mydb.select('info')
        # print(result)

        #执行完成以后初始化数据库数据
        self.initData()

    #预初始化数据
    def initData(self):
        #初始化info表
        # self.mydb.truncTable(TableConst.InfoName())
        #初始化infoRepeat
        self.mydb.truncTable(TableConst.InfoRepeatName())
        #主要是初始化sector server
        #初始化sector
        self.mydb.truncTable(TableConst.SectorName())
        #初始化server
        self.mydb.truncTable(TableConst.ServerName())
        #初始化infoRepeat

        #初始化数据
        index = -1
        for item in self.sector:
            index = index+1
            pid = self.mydb.insert(TableConst.SectorName(), 'name', "'"+item+"'")  
            #开始执行插入服务器
            if pid > 0:
                for server in self.server[index]:
                    value = str(pid)+",'"+server+"'"
                    # 循环插入
                    print(value)
                    self.mydb.insert(TableConst.ServerName(), 'pid, name', value)  
            
    #获取列表数据
    def getList(self, data):
        print(data)
        page = int(data['page'])
        pageSize = int(data['pageSize'])
        #组合where条件
        # name: '',//姓名
        # union_name: '',//势力名称
        # sect: '',//职业名称
        # abilities_min: '',//修为最小值
        # abilities_max: '',//修为最大值
        # equipment_min: '',//装评最小值
        # equipment_max: '',//装评最大值
        # all_abilities_min: '',//总修为最小值
        # all_abilities_max: '',//总修为最大值
        # section_name: ''//大区名称
        # service_name: ''//服务器名称
        where = ''
        if 'name' in data.keys():
            if where == '':
                joinp = ''
            else:
                joinp = ' and '
            where = where+joinp+" name like '%"+data['name']+"%'"

        if 'union_name' in data.keys():
            if where == '':
                joinp = ''
            else:
                joinp = ' and '
            where = where+joinp+" union_name like '%"+data['union_name']+"%'"
            
        if 'sect' in data.keys():
            if where == '':
                joinp = ''
            else:
                joinp = ' and '
            where = where+joinp+" sect like '%"+data['sect']+"%'"

        if 'section_name' in data.keys():
            if where == '':
                joinp = ''
            else:
                joinp = ' and '
            where = where+joinp+" section_name like '%"+data['section_name']+"%'"
        
        if 'seservice_namect' in data.keys():
            if where == '':
                joinp = ''
            else:
                joinp = ' and '
            where = where+joinp+" service_name like '%"+data['service_name']+"%'"

        # if 'abilities_min' in data.keys():
        #     if where == '':
        #         joinp = ''
        #     else:
        #         joinp = ' sect '
        #     where = where+joinp+" sect like %'"+data['sect']+"'%"

        # if 'abilities_max' in data.keys():
        #     if where == '':
        #         joinp = ''
        #     else:
        #         joinp = ' sect '
        #     where = where+joinp+" sect like %'"+data['sect']+"'%"

        order = ' abilities desc'
        if 'orderby' in data.keys():
            order = data['orderby']

        result = self.mydb.select('info', where, '*', page, pageSize, order)
        count = self.mydb.count('info', '')
        return return_list(result, count, page, pageSize)

    #统计日活跃用户，去除死用户
    #def getLiveList(self, data):
        # liveList = self.mydb.select(TableConst.INFO_REPEAT_NAME(), where = '', fields = '*', page = 1, pageSize = 100, order = 'id desc')

    #如果已经查询到存在的data
    def dealRepeat(self, data, sql_value):
        #
        Tstring = ''
        for item in data:
            if Tstring == '':
                prefix = ''
            else:
                prefix = ','
            Tstring = Tstring + prefix +"'"+str(item)+"'"

        if (Tstring.replace(' ', '')  == sql_value.replace(' ', '')) != True:
            #进行录入修改后数据的展示
            self.mydb.insert(TableConst.InfoRepeatName(), 'bang_id, name,section_name,service_name,level,sect,union_name,abilities,equipment,all_abilities', sql_value)
            print("diff log："+time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()))
            print(Tstring.replace(' ', ''))
            print(sql_value.replace(' ', ''))

    #如果不存在就插入 否则按照逻辑插入附表
    def dealInsert(self, bang_id, sqlString, fields = 'bang_id, name,section_name,service_name,level,sect,union_name,abilities,equipment,all_abilities'):
        #这里处理一下如何bang_id存在就继续循环
        data = self.mydb.select(TableConst.InfoName(), where = " bang_id = '"+bang_id+"'", fields = fields)

        #如果已经录入过，就跳出继续
        if len(data) > 0:
            self.dealRepeat(data[0], sqlString)
        else:
            result = self.mydb.insert('info', 'bang_id, name,section_name,service_name,level,sect,union_name,abilities,equipment,all_abilities', sqlString)       

    #做属性等估价
    def evalueate(self, data):
        url = 'http://bang.tx3.163.com/bang/role/'
        url = url + str(data['bang_id'])

        driver_path = r'D:\Program Files\firefox\geckodriver.exe'
        driver = webdriver.Firefox(executable_path=driver_path)
        driver.get(url)
        # self.WriteFile('333.bang', driver.page_source)
        content = driver.page_source
        
        driver.quit()
        ####start 获取数据
        bang_id = url.split('/')[-1]       
        # content = requests.get(url).text
        bs4Html = BeautifulSoup(content, "lxml")
        equipments = bs4Html.find_all('div', 'detail_wrap_block')
        jiahuInfo = bs4Html.find_all('div', 'jhz-box')

        #####start 获取基本信息-------------------------------------------------------
        roleInfo = bs4Html.find('div', 'dInfo').find_all('span')
        bangInfo = {
            'level': roleInfo[0].get_text(),
            'img': roleInfo[1].get_text(),
            'name': roleInfo[2].get_text(),
            'zhiye': roleInfo[3].get_text(),
            'section': roleInfo[4].get_text()
        } 

        equipmentValue = bs4Html.find_all('ul', 'ulList_3')
        equipmentNumber = equipmentValue[0].find_all('span', 'ulList_3_v')[0].get_text()
        abilitiesNumber = equipmentValue[1].find_all('span', 'ulList_3_v')[0].get_text()
        all_abilities = int(equipmentNumber) + int(abilitiesNumber)
        #处理获取数据
        #'bang_id, name,section_name,service_name,level,sect,union_name,abilities,equipment,all_abilities'
        
        prefix = ''
        sqlString = ''
        sqlString = sqlString+prefix+"'"+bang_id+"'"
        prefix = ','
        sqlString = sqlString+prefix+"'"+(roleInfo[2].get_text())+"'"#角色名称
        sqlString = sqlString+prefix+"'"+(roleInfo[4].get_text().split('\xa0')[0])+"'"#大区
        sqlString = sqlString+prefix+"'"+(roleInfo[4].get_text().split('\xa0')[1])+"'"#服务器
        sqlString = sqlString+prefix+"'"+(roleInfo[0].get_text().replace('等级', ''))+"'"#等级
        sqlString = sqlString+prefix+"'"+(roleInfo[3].get_text())+"'"#职业
        sqlString = sqlString+prefix+"''"#势力
        sqlString = sqlString+prefix+"'"+(str(abilitiesNumber))+"'"#修为
        sqlString = sqlString+prefix+"'"+(str(equipmentNumber))+"'"#装瓶
        sqlString = sqlString+prefix+"'"+(str(all_abilities))+"'"#总修为
        #插入    
        self.dealInsert(bang_id, sqlString)
        #####end 获取基本信息-------------------------------------------------------

        #####start 处理钻钱------------------------------------------------------------
        zuanPrice = 0.00
        for equipment in equipments:
            name = equipment.find('h3').get_text()
            type = ''
            if equipment.find('span', 'eq_type'):
                type = equipment.find('span', 'eq_type').get_text()
            #开始取下加护值
            info = ''
            jiahuNumber = 0
            lianhuNumber = 0
            if equipment.find('div', 'tx3TextBlock'):
                #加护
                jiahu = equipment.find('div', 'tx3TextBlock').find('div', 'jhz-box')
                if jiahu:
                    jiahuNumber = int(int(re.findall(r"width:(.+?)px", jiahu.find('span', 'percentFornt').attrs['style'])[0])/8) 
                #炼护
                lianhu = equipment.find('div', 'tx3TextBlock').find('div', 'lhz-box')                
                if lianhu:
                    lianhuNumber = int(int(re.findall(r"width:(.+?)px", lianhu.find('span', 'percentFornt').attrs['style'])[0])/8) 
                    #继续寻找
                #说明有装备加护等信息
                # info = equipment.find('div', 'tx3TextBlock')['tx3text'].split('#r')[-1].replace('#w(0)', '').split('　')[-1]
                # info = equipment.find('div', 'tx3TextBlock')['tx3text'].split('#r')
            #     info = equipment.find('div', 'tx3TextBlock')['tx3text'].replace('　', '')
            #     lianhu = re.findall(r"炼护值(.+?)#w", info) 
            #     if type == '靴子':
            #         jiahu = re.findall(r"#W加护值(.+?)$", info)
            #     else:
            #         jiahu = re.findall(r"#W加护值(.+?)#r", info)
            #     #开始处理加护和炼护数值
            #     if len(jiahu) > 0:
            #         jiahuNumber = (len(jiahu[0].split('^')) - 1)
            #     if len(lianhu) > 0:
            #         lianhuNumber = (len(lianhu[0].split('^')) - 1)
            zuanPrice = zuanPrice + function.account_cash(jiahuNumber)
            zuanPrice = zuanPrice + function.account_cash(lianhuNumber)
            # print(name, '--', type, '--', jiahuNumber, '--', lianhuNumber)
        #####end 处理钻钱------------------------------------------------------------
        
        ####start 处理孩子
        tableContents =  bs4Html.find(id="tableCHILD").find('div', 'TableContents')
        childs = tableContents.find_all('div', 'TableContents_2')
        dianPrice = 0.00
        for child in childs:
            ul = child.find_all('ul', 'DataListStyle')[1]
            #获取加护值
            li2 = ul.find_all('li', 'li2')
            childZihi = int(li2[1].get_text())
            childJiahu = int(li2[4].get_text())
            #开始计算孩子
            childJihuList = function.account_jiahu(childJiahu)
            #计算孩子钻钱
            for childJia in childJihuList:
                zuanPrice = zuanPrice + function.account_cash(childJia)
            
        childDianhuaList = tableContents.find_all('div', 'TableContents_1')
        ######处理孩子的炼护
        for duanhua in childDianhuaList:
            dianhuaData = duanhua.find_all('div', 'equip_pic')
            for intro in dianhuaData:
                introInfo = intro.attrs['intro']
                dian = re.findall(r'点化：(.+?)#r#R', introInfo)
                dianNumber = 0
                if len(dian) > 0:
                    dianNumberList = dian[0].split("#r#c")
                    del dianNumberList[0]
                    dianNumber = len(dianNumberList)
                    dianPrice = dianPrice + function.account_dian(dianNumber)
                    print(dianNumber)
        ######处理天书
      
        tianshuPrice = 0.00
        childTianshuList = tableContents.find_all('ul', 'tianshu-img-list')
        for tianshuC in childTianshuList:
            liList = tianshuC.find_all('li')
            for li in liList:
                tianshu = re.findall(r'尚书令等级(.+?)$', li.attrs['intro'])
                tianshuNumber = 0
                if len(tianshu):
                    tianshuNumberList = tianshu[0].split("#r#c")
                    del tianshuNumberList[0]
                    tianshuNumber = len(tianshuNumberList)
                    tianshuPrice = tianshuPrice + function.account_book(tianshuNumber)
                    # print(tianshuNumberList,  tianshuNumber)
        ####end 处理孩子

        #print('钻钱：', '--', zuanPrice)
        returnData = {
            "info": bangInfo,
            "zuanPrice": round(zuanPrice, 2),
            'dianPrice': round(dianPrice, 2),
            'tianshuPrice': round(tianshuPrice, 2),
            'allPrice': round(zuanPrice+dianPrice+tianshuPrice, 2)
        }
        # print(returnData)
        return returnData
        # self.WriteFile('222.txt', equipments)

#开始使用方法
# html = Html('http://bang.tx3.163.com/bang/ranks?order_key=xiuwei&school=&sector=79%E7%BA%A7%E4%B8%93%E5%8C%BA&server=%E9%A3%9E%E9%B8%BF%E8%B8%8F%E9%9B%AA&count=20')
# # html.main()
# html.getList()
# html.evalueate('http://bang.tx3.163.com/bang/role/30_11318203')
#半度回眸
# http://bang.tx3.163.com/bang/role/21_10885
#靖戈
#http://bang.tx3.163.com/bang/role/27_6815
#嘘嘘
#http://bang.tx3.163.com/bang/role/24_11995270
#http://bang.tx3.163.com/bang/role/38_5860 
#创建数据库

# price13 = function.account_cash(13)
# price14 = function.account_cash(14)
# price15 = function.account_cash(15)
# price16 = function.account_cash(16)
# price17 = function.account_cash(17)
# price18 = function.account_cash(18)
# price19 = function.account_cash(19)
# price20 = function.account_cash(20)
# print("13钻：", price13)
# print("14钻：", price14)
# print("15钻：", price15)
# print("16钻：", price16)
# print("17钻：", price17)
# print("18钻：", price18)
# print("19钻：", price19)
# print("20钻：", price20)



    