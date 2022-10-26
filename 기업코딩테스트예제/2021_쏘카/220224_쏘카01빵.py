bakery_schedule = ["09:05 10", "12:20 5", "13:25 6", "14:24 5"]
current_time = ["12:05"]
K = 10
result = 0

blist = [[0] * 2 for i in range(len(bakery_schedule))]

bread = 0

def change(a):
  spl = a.split(':')
  return (int(spl[0]) * 60) + int(spl[1])

for i, b in enumerate(bakery_schedule):
  blist[i][0] = change(b.split(' ')[0])
  blist[i][1] = int(b.split(' ')[1])
  bread += int(b.split(' ')[1])

for b in blist:
  if K <= 0:
    break
  if bread < K:
    result = -1
    break
  ctime = change(current_time[0])
  if ctime < b[0]:
    result = b[0] - ctime
    K -= b[1]
    ctime = b[0]

print(result)
