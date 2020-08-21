import os
import requests
import time

"""
    @author alpah 
    @date 2020 08 20 14:29
    1.this is a lib for deal image to download local file 
    2.first we should import this lid 
    3.then new class init params for using
    4.call this main def for deal last application
"""

# url='http://www.baidu.com'

# while(1):
#     r = requests.get(url)
#     print(r)
#     time.sleep(2)

class Img:
    #初始化方法
    def __init__(self, file_name, url, dir = 'image'):
        self.name = file_name
        self.url = url
        self.dir = dir
        self.headers = {
            'Accept':'image/webp,image/apng,image/*,*/*;q=0.8',
            'Accept-Encoding':'gzip, deflate',
            'Accept-Language':'zh-CN,zh;q=0.9',
            'Connection':'keep-alive',
            'Host': 'i.meizitu.net',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36'
        }

    #处理文件方法
    def dealImg(self):
        img_file_name = 'duchengjun.jpg'
        img = requests.get(self.url).content
        if not os.path.exists(self.dir):
            os.mkdir(self.dir)
        with open(self.name, 'wb') as f:
            f.write(img)

    def main(self):
        self.dealImg()

#使用方式，初始化三个参数，然后直接走main函数
#pic = Img('./image/杜成军.jpg', 'http://')
#pic.main()
    