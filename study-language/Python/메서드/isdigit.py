# isdigit(), isdecimal(), isnumeric()
# 해당 문자열이 숫자만으로 이루어져있는지 확인한다. 숫자만이면 True
# isdigit()은 숫자처럼 생겼는가(0123456789)만 true로
# isdecimal()은 int, 즉 정수형만 true로
# isdigit()은 특수문자, 분수, 제곱근 등 모든 숫자를 true로

a = '12345678'
print(a.isdigit())
print(a.isdecimal())
print(a.isnumeric())

print("="*8)

b = '3²'
print(b.isdigit())
print(b.isdecimal())
print(b.isnumeric())