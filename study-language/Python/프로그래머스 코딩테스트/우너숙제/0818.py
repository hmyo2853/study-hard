array = [[0,0,0],
         [0,0,0],
         [0,0,0]]
check = [False, False, False]
i = 0

# 함수 조건1. TF로 방문했는지 확인 / 조건2. F이면 1을 찍는다 / 조건3. 함수 끝날때 초기화

def solution(i):
    if i > len(array) - 1:          # i가 3일때 재귀 종료
        print(array)
        print("-"*36)
        return
    for n in range(len(check)):
        if check[n] == False:       # false일때
            array[i][n] = 1
            check[n] = True
            solution(i+1)
            array[i][n] = 0         # 초기화
            check[n] = False

solution(i)

'''
21 : 함수를 호출한다. 000 000 000 FFF i=0

9 : 함수를 실행한다. 000 000 000 FFF i=0. if 패스, for n=0, check[0] = F 이므로
    array[0][0] 1로 변경, 100 000 000 TFF가 된다.
    solution 함수 호출. [재귀 1] i 1증가, 함수 실행 멈춤.
    
9 : [재귀 1] 함수 실행한다. 100 000 000 TFF i=1. if 패스, for n=0, check[0] = T 통과
    for n=1, check[1] = F 이므로 array[1][1] 1로 변경 T변경, 100 010 000 TTF가 된다.
    solution 함수 호출. [재귀 2] i 1증가, 함수 실행 멈춤.
    
9 : [재귀 2] 함수 실행한다. 100 010 000 TTF i=2, if 패스, for n=0, check[0] = T 통과
    for n=1, check[1] = T 통과 for n=2, check[2] = F 이므로 array[2][2] 1로 변경 T변경, 100 010 001 TTT가 된다.
    solution 함수 호출. [재귀 3] i 1증가, 함수 실행 멈춤.
    
9 : [재귀 3] 함수 실행한다. 100 010 001 TTT i=3, if 실행, print. 함수 실행 종료

17 : 멈췄던 [재귀 2] 함수 다시 동작. i=2, n=2, array[2][2] 0 변경 F변경, 100 010 000 TTF for 종료
    함수 실행 종료

17 : 멈췄던 [재귀 1] 함수 다시 동작. i=1, n=1, array[1][1] 0 변경 F변경, 100 000 000 TFF
    n증가 for i=1, n=2, check[2] = F이므로 array[1][2] 1로 변경 T변경, 100 001 000 TFT
    solution 함수 호출. [재귀 2] i 1증가, 함수 실행 멈춤

9 : [재귀 2] 함수 실행한다. 100 001 000 TFT i=2, if 패스, for n=0, check[0] = T 통과
    for n=1, check[1] = F 이므로 array[2][1] 1로 변경 T변경, 100 001 010 TTT
    solution 함수 호출. [재귀 3] i 1증가, 함수 실행 멈춤.

9 : [재귀 3] 함수 실행한ㄷ나. 100 001 010 TTT i=3, if 실행, print. 함수 실행 종료

17 : 멈췄던 [재귀 2] 함수 다시 동작. i=2, n=1, array[2][1] 0 변경 F변경, 100 001 000 TFT
    n증가 for i=2, n=2, check[2] = T 통과, 함수 실행 종료

17 : 멈췄던 [재귀 1] 함수 다시 동작. i=1, n=2, array[1][2] 0 변경 F변경, 100 000 000 TFF for 종료
    함수 실행 종료

17 : 멈췄던 함수 다시 동작. i=0, n=0, array[0][0] 0 변경 F변경, 000 000 000 FFF
    n증가 for i=0, n=1, array[0][1] 1 변경 T변경, 010 000 000 FTF
    solution 함수 호출. [재귀 1] i 1증가, 함수 실행 멈춤.

9 : [재귀 1] 함수 실행한다. 010 000 000 FTF i=1. if 패스, for n=0, check[0] = F이므로
    array[1][0] 1변경 T변경, 010 100 000 TTF
    solution 함수 호출. [재귀 2] i 1증가, 함수 실행 멈춤.

9 : [재귀 2] 함수 실행한다. 010 100 000 TTF i=2. if 패스, for n=0, check[0] = T 통과
    for n=1, check[1] = T 통과 for n=2, check[2] = F이므로 array[2][2] 1로 변경 T변경, 010 100 001 TTT
    solution 함수 호출. [재귀 3] i 1증가, 함수 실행 멈춤.

9 : [재귀 3] 함수 실행한다. 010 100 001 TTT i=3, if 실행, print. 함수 실행 종료

17 : 멈췄던 [재귀 2] 함수 다시 동작. i=2, n=2, array[2][2] 0 변경 F변경, 010 100 000 TTF for 종료
    함수 실행 종료

17 : 멈췄던 [재귀 1] 함수 다시 동작. i=1, n=0, array[1][0] 0 변경 F변경, 010 000 000 FTF
    n증가 for i=1, n=1, check[1] = T 통과 for i=1, n=2, check[2] = F이므로
    array[1][2] 1로 변경 T변경, 010 001 000 FTT
    solution 함수 호출. [재귀 2] i 1증가, 함수 실행 멈춤

9 : [재귀 2] 함수 실행한다. 010 001 000 FTT i=2. if 패스, for n=0, check[0] = F이므로
    array[2][0] 1변경 T변경, 010 001 100 TTT
    solution 함수 호출. [재귀 3] i 증가, 함수 실행 멈춤.

9 : [재귀 3] 함수 실행한다. 010 001 100 TTT i=3. if 실행, print. 함수 실행 종료

17 : 멈췄던 [재귀 2] 함수 다시 동작. i=2, n=0, array[2][0] 0 변경 F변경, 010 001 000 FTT
    n증가 for i=2, n=1, check[1] = T 통과 for i=2, n=2, check[2] = T 통과 for 종료
    함수 실행 종료

17 : 멈췄던 [재귀 1] 함수 다시 동작. i=1, n=2, array[1][2] 0 변경 F변경, 010 000 000 FTF for 종료
    함수 실행 종료

17 : 멈췄던 함수 다시 동작. i=0, n=1, array[0][1] 0 변경 F변경, 000 000 000 FFF
    n증가 for i=0, n=2, check[2] = F 이므로 array[0][2] 1로 변경 T변경 001 000 000 FFT
    solution 함수 호출. [재귀 1] i 1증가, 함수 실행 멈춤

9 : [재귀 1] 함수 실행한다. 001 000 000 FFT i=1. if 패스, for n=0, check[0] = F이므로
    array[1][0] 1로 변경 T변경, 001 100 000 TFT
    solution 함수 호출. [재귀 2] i 1증가, 함수 실행 멈춤

9 : [재귀 2] 함수 실행한다. 001 100 000 TFT i=2. if 패스, for n=0, check[0] = T 통과
    for n=1, check[1] = F이므로 array[2][1] 1로 변경 T변경, 001 100 010 TTT
    solution 함수 호출. [재귀 3] i 증가, 함수 실행 멈춤.

9 : [재귀 3] 함수 실행한다. 001 100 010 TTT i=3. if 실행, print. 함수 실행 종료

17 : 멈췄던 [재귀 2] 함수 다시 동작. i=2, n=1, array[2][1] 0변경 F변경, 001 100 000 TFT
    n 증가 for i=2, n=2, check[2] = T 통과 for 종료
    함수 실행 종료

17 : 멈췄던 [재귀 1] 함수 다시 동작. i=1, n=0, array[1][0] 0변경 F변경, 001 000 000 FFT
    n 증가 for i=1, n=1, check[1] = F이므로 array[1][1] 1로 변경 T변경, 001 010 000 FTT
    solution 함수 호출. [재귀 2] i 증가, 함수 실행 멈춤.

9 : [재귀 2] 함수 실행한다. 001 010 000 FTT i=2. if 패스, for n=0, check[0] = F이므로
    array[2][0] 1변경 T변경 001 010 100 TTT
    solution 함수 호출. [재귀 3] i 증가, 함수 실행 멈춤.

9 : [재귀 3] 함수 실행한다. 001 010 100 TTT i=3. if 실행, print. 함수 실행 종료

17 : 멈췄던 [재귀 2] 함수 다시 동작. i=2, n=0, array[2][0] 0번경 F변경, 001 010 000 FTT
    n증가 for i=2, n=1, check[1] = T 통과 for i=2, n=2, check[2] = T 통과 for 종료
    함수 실행 종료

17 : 멈췄던 [재귀 1] 함수 다시 동작. i=1, n=1, array[1][1] 0변경 F변경, 001 000 000 FFT
    n증가 for i=1, n=2, check[2] = T 통과 for 종료
    함수 실행 종료

17 : 멈췄던 함수 다시 동작. i=0, n=2, array[0][2] 0변경 F변경, 000 000 000 FFF for 종료
    함수 실행 종료
'''
