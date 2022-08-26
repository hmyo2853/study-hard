# re sub 메서드를 사용하여 정규식으로 특정 문자 판별하기
'''
형식)
^ - 문자열의 시작을 의미. 또는 not의 의미.

[] - 문자의 집합,
[xyz] 라고 패턴을 적게되면 x또는 y또는 z라는 문자와 매칭됨 / [x-z] : 이렇게 범위로도 적을 수 있음. / [^a] : a를 제외한 모든 문자를 의미.
'''
import re

text1 = '123abc456'
text11 = re.sub(r'[1-3]', '', text1)
print(text11)

text2 = '123abc456'
text22 = re.sub(r'[^1-3a-z]', '', text2)
print(text22)