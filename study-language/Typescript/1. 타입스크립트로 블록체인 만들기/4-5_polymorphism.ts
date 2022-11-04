interface SStorage<T> {
  [x: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    // set api
    this.storage[key] = value;
  }
  remove(key: string) {
    // remove localstorage
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    return this.storage;
  }
}

const stringsStorage = new LocalStorage<string>();
stringsStorage.get("ket");
stringsStorage.set("hello", "how r you"); // string, string

const booleansStorage = new LocalStorage<boolean>();
booleansStorage.get("xxx");
booleansStorage.set("hello", false); // string, false
booleansStorage.remove("remove"); // string
booleansStorage.clear();
