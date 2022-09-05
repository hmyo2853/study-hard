# https://school.programmers.co.kr/learn/courses/30/lessons/12901

import datetime

def solution(a, b):
    week = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
    date = datetime.date(2016, a, b)
    return week[date.weekday()]
    '''
    1월은 31, 2월 29, 3월 31, 4월 30, 5월 31, 6월 30, 7월 31, 8월 31, 9월 30, 10월 31, 11월 30, 12월 31
    if a == 1 or a == 2:
        days = (30*(a-1)) + (a-1) + b - 1
    else: # 홀짝
        days = (30*(a-1)) + (a-()) + b - 1
    return week[days % 7]
        
    '''