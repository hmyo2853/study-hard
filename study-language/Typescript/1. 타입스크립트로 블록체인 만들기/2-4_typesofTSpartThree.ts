let aa: unknown;

if (typeof aa === "number") {
  // type check
  let b = aa + 1;
}

if (typeof aa === "string") {
  let b = aa.toUpperCase();
}

function hello(): never {
  throw new Error("XXX");
}

function hi(name: string | number) {
  if (typeof name === "string") {
  } else if (typeof name === "number") {
  } else {
    name;
  }
}
