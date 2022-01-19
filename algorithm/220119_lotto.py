import random

zerocount = random.randint(0, 5) #0으로 바뀐 숫자의 갯수

listcount = 6 - zerocount #0으로 바뀐 갯수 외 나머지

print(listcount)

#random에서 제공하는 모듈 sample(중복없이 listcount만큼 뽑기)
num_lotto = random.sample(range(1, 45), listcount)

print(num_lotto)

#중복없이 복권 당첨 list 6번 숫자 뽑기 1~ 45
num_winning = random.sample(range(1, 45), 6)

print(num_winning)

check_num = 0

#반복문으로 당첨 숫자를 하나씩 가져오고 당첨 숫자랑 같은게 있다면 count + 1해준다
for i in range(0, len(num_lotto)):
  if num_lotto[i] in num_winning :
    check_num += 1
    print(str(num_lotto[i]) + '은 로또 당첨 숫자에 있다')

print('=' * 10)

print('0을 제외한 로또 숫자 갯수' + str(len(num_lotto)))
print('0을 제외하여 로또 숫자만 ' + str(len(num_lotto)) + '개를 맞추면, 최저 순위' + str(7 - len(num_lotto)))
print('0을 모두 포함하여 ' + str(zerocount) + '개와 로또 숫자 ' + str(check_num) + '개를 맞추면, 최고 순위' + str(7 - (zerocount + check_num)) + '등')

