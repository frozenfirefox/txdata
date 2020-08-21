#-*- coding:utf-8 -*-
from http.server import HTTPServer, BaseHTTPRequestHandler
import json
import urllib
import web

data = {"key": "开心"}
host = ('127.0.0.1', 8000)

class Resquest(BaseHTTPRequestHandler):
    input = {}

    #处理get方法
    def do_GET(self):
        if self.path != '/favicon.ico':
            self.handleData()
            #动态调用方法
            print(self.input)
            print(self.input['page'])
            print(self.input['pageSize'])
            result = self.__getattribute__(self.action.replace('.py', '').lower())(self.input['page'], self.input['pageSize'])
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
            self.send_header('Access-Control-Max-Age', '1000')
            self.send_header('Access-Control-Allow-Headers', '*')
            self.end_headers()
            self.wfile.write(json.dumps(result, sort_keys=True, indent=4, separators=(',', ': ')).encode())
    
    #处理post方法
    def do_POST(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(data).encode())
    
    #处理参数
    def handleData(self):
        path = self.path.replace('/', '').split('?')
        self.action = path[0]
        paramsData = path[1].split('&')
        for item in paramsData:
            params = item.split('=')       
            self.input[params[0]] = params[1]

    #######以下方法是路由
    def getlist(self, page, pageSize):
        htmlObj = web.Html('http://bang.tx3.163.com/bang/ranks?order_key=xiuwei&school=&sector=79%E7%BA%A7%E4%B8%93%E5%8C%BA&server=%E9%A3%9E%E9%B8%BF%E8%B8%8F%E9%9B%AA&count=20')
        return htmlObj.getList(int(page), int(pageSize))

if __name__ == '__main__':
    server = HTTPServer(host, Resquest)
    print("Starting server, listen at: %s:%s" % host)
    server.serve_forever()