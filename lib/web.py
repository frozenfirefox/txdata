#!/usr/bin/python
import requests
import os
from bs4 import BeautifulSoup
import time
import json
#自己库
import img
import db
from TableConst import TableConst

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
    def __init__(self, url):
        self.mydb = db.Db('tx.db')
        self.initTable()
        self.url = url
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
            result = self.mydb.insert('info', 'bang_id, name,section_name,service_name,level,sect,union_name,abilities,equipment,all_abilities', sqlString)             
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
        #循环处理
        for num in range(1, (max_page + 1)):
            inurl = self.url+'&page='+ str(num)
            print(inurl)
            content = requests.get(inurl).text
            self.Data(content)
            time.sleep(0.5)
        #开始处理

    def initTable(self):
        infoSql = TableConst.InfoTable()
        result = self.mydb.createTable(infoSql)
        # print(result)
        # # print(result)
        # tables = mydb.execute("select name from sqlite_master where type='table' order by name")
        # print(tables)
        # # result = mydb.execute("select * from info")
        # result = mydb.select('info')
        # print(result)

    #获取列表数据
    def getList(self, page = 1, pageSize = 10):
        result = self.mydb.select('info', '', '*', page, pageSize)
        count = self.mydb.count('info', '')
        return return_list(result, count, page, pageSize)

#开始使用方法

# html = Html('http://bang.tx3.163.com/bang/ranks?order_key=xiuwei&school=&sector=79%E7%BA%A7%E4%B8%93%E5%8C%BA&server=%E9%A3%9E%E9%B8%BF%E8%B8%8F%E9%9B%AA&count=20')
# # html.main()
# html.getList()

#创建数据库



    