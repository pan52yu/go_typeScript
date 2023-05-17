interface People {
  name: string
  age: number | string
}

interface People {
  friends: string
}
const Zs: People = {
  name: "zs",
  age: 13,
  friends: "ls",
}

const Ls: People = {
  name: "ls",
  age: "18",
  friends: "zs",
}

interface Fn {
  name: string
  doSome(): void
}

class MyFn implements Fn {
  name: string
  constructor(name: string) {
    this.name = name
  }
  doSome(): void {
    console.log("做什么事")
  }
}
