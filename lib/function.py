
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

