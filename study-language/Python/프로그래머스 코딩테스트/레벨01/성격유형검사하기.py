# https://school.programmers.co.kr/learn/courses/30/lessons/118666

def solution(survey, choices):
    # 성격유형 : 점수
    score = {'R':0, 'T':0, 'C':0, 'F':0, 'J':0, 'M':0, 'A':0, 'N':0}
    answer = ['R', 'C', 'J', 'A']
    
    for i in range(len(choices)):
        if choices[i] > 4: # 5,6,7 동의, 뒤알파벳 카운트
            if choices[i] == 5:
                score[survey[i][1]] += 1
            elif choices[i] == 6:
                score[survey[i][1]] += 2
            elif choices[i] == 7:
                score[survey[i][1]] += 3
        elif choices[i] < 4: # 1,2,3 비동의, 앞알파벳 카운트
            if choices[i] == 1:
                score[survey[i][0]] += 3
            elif choices[i] == 2:
                score[survey[i][0]] += 2
            elif choices[i] == 3:
                score[survey[i][0]] += 1
                
    if score["R"] < score["T"]:
        answer[0] = "T"
    if score["C"] < score["F"]:
        answer[1] = "F"
    if score["J"] < score["M"]:
        answer[2] = "M"
    if score["A"] < score["N"]:
        answer[3] = "N"
    return "".join(answer)