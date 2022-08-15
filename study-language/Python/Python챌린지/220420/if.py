"""
Again, the code is broken, you need to create 4 functions.
  - add_to_dict: Add a word to a dict.
  - get_from_dict: Get a word from inside a dict.
  - update_word: Update a word inside of the dict.
  - delete_from_dict: Delete a word from the dict.

All this functions should check for errors, follow the comments to see all cases you need to cover.

There should be NO ERRORS from Python in the console.
"""

def add_to_dict(a, b, c=None):
  if type(a) is dict and type(b) is str: # a가 dict이다, b가 str이다
      if type(c) is str: # c가 str이다, add a[b] = c
        if b in a: # 이미 b가 있다면
          print(f"{b} is already on the dictionary. Won't add")
        else:
          a[b] = c
          print(f'{b} has been added')
      else: # c가 str이 아니라면
        print(f'You need to send a word and a definition.')
  else:
    print(f'You need to send a dictionary. You sent: {type(a)}')
  pass

def get_from_dict(a, b=None):
  if type(a) is dict and type(b) is str: # a가 dict이다. b가 str이다.
      if b in a:
        print(f'{b}: {a[b]}')
      else:
        print(f'{b} was not found in this dict')
  elif b == None: # b가 없을때
    print(f'You need to send a word to search for.')
  else: # a가 dict가 아닐때
    print(f'You need to send a dictionary. You send {type(a)}')

def update_word(a, b, c=None):
  if type(a) is dict and type(b) is str: # a가 dict, b가 str
    if type(c) is str: # a, b, c 모두 받음
      if b in a: # b가 a에 있다면 c를 업데이트
        a[b] = c
        print(f'{b} has been updated to: {c}')
      else: # b가 없다
        print(f"{b} is not on the dict. Can't update non-existing word.")
    else: # c를 받지 않음
      print(f'You need to send a word and a definition to update.')
  else:
    print(f'You need to send a dictionary. You send {type(a)}')

def delete_from_dict(a, b=None):
  if type(a) is dict and type(b) is str: # a가 dict, b가 str
    if b in a: # a에 b가 있다
      del a[b]
      print(f'{b} has been deleted')
    else: # a가 b에 없다
      print(f"{b} is not in this dict. Won't delete")
  elif b == None:
    print(f'You need to specify a word to delete.')
  else:
    print(f'You need to send a dictionary. You send {type(a)}')

# \/\/\/\/\/\/\ DO NOT TOUCH  \/\/\/\/\/\/\

import os

os.system('clear')


my_english_dict = {}

print("\n###### add_to_dict ######\n")

# Should not work. First argument should be a dict.
print('add_to_dict("hello", "kimchi"):')
add_to_dict("hello", "kimchi")

# Should not work. Definition is required.
print('\nadd_to_dict(my_english_dict, "kimchi"):')
add_to_dict(my_english_dict, "kimchi")

# Should work.
print('\nadd_to_dict(my_english_dict, "kimchi", "The source of life."):')
add_to_dict(my_english_dict, "kimchi", "The source of life.")

# Should not work. kimchi is already on the dict
print('\nadd_to_dict(my_english_dict, "kimchi", "My fav. food"):')
add_to_dict(my_english_dict, "kimchi", "My fav. food")


print("\n\n###### get_from_dict ######\n")

# Should not work. First argument should be a dict.
print('\nget_from_dict("hello", "kimchi"):')
get_from_dict("hello", "kimchi")

# Should not work. Word to search from is required.
print('\nget_from_dict(my_english_dict):')
get_from_dict(my_english_dict)

# Should not work. Word is not found.
print('\nget_from_dict(my_english_dict, "galbi"):')
get_from_dict(my_english_dict, "galbi")

# Should work and print the definiton of 'kimchi'
print('\nget_from_dict(my_english_dict, "kimchi"):')
get_from_dict(my_english_dict, "kimchi")

print("\n\n###### update_word ######\n")

# Should not work. First argument should be a dict.
print('\nupdate_word("hello", "kimchi"):')
update_word("hello", "kimchi")

# Should not work. Word and definiton are required.
print('\nupdate_word(my_english_dict, "kimchi"):')
update_word(my_english_dict, "kimchi")

# Should not work. Word not found.
print('\nupdate_word(my_english_dict, "galbi", "Love it."):')
update_word(my_english_dict, "galbi", "Love it.")

# Should work.
print('\nupdate_word(my_english_dict, "kimchi", "Food from the gods."):')
update_word(my_english_dict, "kimchi", "Food from the gods.")

# Check the new value.
print('\nget_from_dict(my_english_dict, "kimchi"):')
get_from_dict(my_english_dict, "kimchi")


print("\n\n###### delete_from_dict ######\n")

# Should not work. First argument should be a dict.
print('\ndelete_from_dict("hello", "kimchi"):')
delete_from_dict("hello", "kimchi")

# Should not work. Word to delete is required.
print('\ndelete_from_dict(my_english_dict):')
delete_from_dict(my_english_dict)

# Should not work. Word not found.
print('\ndelete_from_dict(my_english_dict, "galbi"):')
delete_from_dict(my_english_dict, "galbi")

# Should work.
print('\ndelete_from_dict(my_english_dict, "kimchi"):')
delete_from_dict(my_english_dict, "kimchi")

# Check that it does not exist
print('\nget_from_dict(my_english_dict, "kimchi"):')
get_from_dict(my_english_dict, "kimchi")

# \/\/\/\/\/\/\ END DO NOT TOUCH  \/\/\/\/\/\/\