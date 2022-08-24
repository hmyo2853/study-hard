# https://school.programmers.co.kr/learn/courses/30/lessons/72410

import re

def solution(new_id):
    word = new_id.lower() # 1단계 대문자 > 소문자
    word = re.sub(r"[^a-z0-9-_.]", "", word) # 2단계 대소문자특문
    # 3단계 .. -> .
    while ".." in word:
        word = word.replace("..", ".")
    # 4단계 처음과 끝 . 제거
    if word[:1] == ".":
        word = word[1:]
    if word[len(word)-1:] == ".":
        word = word[:len(word)-1]
    # 5단계 빈문자열 a반복
    if word == "": word += "a"
    # 6단계 15자로 자르기
    if len(word) > 15:
        word = word[:15]
        if word[len(word)-1:] == ".": word = word[:len(word)-1]
    # 7단계 2자 이하 반복
    while len(word) < 3:
        word += word[len(word)-1:]
    return word

solution(new_id, i)