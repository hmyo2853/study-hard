import random

zerocount = random.randint(1, 6) #0으로 바뀐 숫자의 갯수

listcount = 6 - zerocount #0으로 바뀐 갯수 외 나머지

#random에서 제공하는 모듈 sample(중복없이 listcount만큼 뽑기)
lottos = random.sample(range(1, 45), listcount)

for i in range(zerocount) : #0으로 바뀐 숫자만큼 반복 [25, 5, 41, 32, 0, 0] = 2, i는 0, 1
    lottos.append(0)

#중복없이 복권 당첨 list 6번 숫자 뽑기 1~ 45
win_nums = random.sample(range(1, 45), 6)

check_num = 0

#반복문으로 당첨 숫자를 하나씩 가져오고 당첨 숫자랑 같은게 있다면 count + 1해준다
for i in range(0, len(lottos)):
  if lottos[i] in win_nums :
    check_num += 1


#최고 순위와 최저 순위 배열로 넣기
answer = []
answer.append(7 - (zerocount + check_num))
answer.append(6 - check_num)

print('=' * 10)

print(lottos)
print(win_nums)
print(answer)


print('0으로 바뀐 로또 갯수는 ' + str(zerocount) + '개')
print('0을 제외하여 로또 숫자만 ' + str(check_num) + '개를 맞추면, 최저 순위' + str(6 - check_num))
print('0으로 바뀐 로또 숫자 ' + str(zerocount) + '개와 로또 숫자 ' + str(check_num) + '개를 맞추면, 최고 순위' + str(7 - (zerocount + check_num)) + '등')
