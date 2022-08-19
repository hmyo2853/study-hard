# https://school.programmers.co.kr/learn/courses/30/lessons/12977

def solution(nums):
    # 큰수부터 나열
    nums.sort(reverse = True)
    print('나열된 array : ', nums)
    
    array = []
    maxNum = 0
    answer = 0
    stack = []
    
    # 가장 큰 수 찾기
    for idx in range(3):
        maxNum += nums[idx]
    print('가장 큰 수 : ', maxNum)
    
    # 소수찾는 함수, 2부터 x까지 
    def sosu(x):
        for i in range(2, x):
            if x % i == 0:
                # 나누어진다면 소수가 아니기 때문에 break
                print(x, '는 소수가 아니다.')
                break
            # 나누어지지않는다면 소수이므로 추가
                
    # 만들어질 수 있는 소수 찾기, 1은 제외
    for num in range(2, maxNum+1):
        if num > 2:
            sosu(num)
        else: # num이 2라면 array에 추가
            array.append(num)
            
    print('만들어질 수 있는 소수 배열 : ', array)
    return answer