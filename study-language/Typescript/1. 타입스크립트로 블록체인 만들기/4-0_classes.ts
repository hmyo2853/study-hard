import { isNullishCoalesce } from "typescript";

abstract class User {
  // abstract class는 새로운 인스턴트를 만들진 못한다. new User(x)
  // 상속만 가능하다.
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string // public은 접근 가능, private 접근 불가능
  ) {}
  // 추상메서드가 있어야한다.
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Players extends User {}

const bigman = new Players("bigman", "las", "빅맨");

bigman.getFullName();

//////// Recap

type Words = {
  [whatever: string]: string;
};
class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    // 메서드
    if (this.words[word.term] === undefined) {
      this.words.term = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimvhi", "한국 음식");

const dict = new Dict();
dict.add(kimchi);
dict.def("kimchi");
