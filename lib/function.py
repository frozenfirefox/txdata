
#计算加护金额
#hong 330r
#lei 21.3r
#yue 2.2r
#ri 0.12r
def account_cash(number, xishu = 0.75, hong = 330, lei = 21.3, yue = 2.2, ri = 0.12):
    price = 0.00
    for item in range(1, (number + 1)):
        if item >= 1 and item < 6:
            price = price+(ri*1)*((1+ (item ** 6)/(6 ** 6))*xishu)
        if item >= 6 and item < 10:
            price = price+(yue*1)*((1+ (item ** 5)/(9 ** 5))*xishu)
        if item >= 10 and item < 15:
            price = price+(lei*1)*((1+ (item ** 5)/(14 ** 5))*xishu)
        if item >= 15 and item <= 20:
            price = price+(hong*1)*((1+ (item ** 50)/(19 ** 50))*xishu)
    return round(price, 2)

#计算加护可能性
#number 总加护值
#equitNumber 总共几件装备
def account_jiahu(number, equitNumber = 6):
    #取最大的可能性
    avg = int(number//equitNumber)
    mod = int(number % equitNumber)
    
    listData = []
    for item in range(0, equitNumber):
        listData.append(avg) 

    for data in range(0, mod):
        listData[data] = listData[data] + 1

    return listData

#计算点化价格
#5点化 2000 
#4点化 800
#3点化 80
#2点化 20
#1点化 5
def account_dian(number, five = 10000, four = 800, three = 80, two = 20, one = 5):
    price = 0
    if number == 5:
        price = five
    elif number == 4:
        price = four
    elif number == 3:
        price = three
    elif number == 2:
        price = two
    elif number == 1:
        price = one
    else:
        price = 0
    return price

#天书计算价格
#4条 4000
#3条 300
#2条 100
#1条 50
def account_book(number, four = 4000, three = 300, two = 100, one = 50):
    if number == 4:
        price = four
    elif number == 3:
        price = three
    elif number == 2:
        price = two
    elif number == 1:
        price = one
    else:
        price = 0
    return price

