class Preson {
  /**
   * TS中属性具有三种修饰符：
   * - public（默认值），可以在类、子类和对象中修改
   * - protected ，可以在类、子类中修改
   * - private ，可以在类中修改
   */
  private _name: string
  private _age: number

  constructor(name: string, age: number) {
    this._name = name
    this._age = age
  }

  getName(): string {
    return this.name
  }

  setName(name: string): void {
    this.name = name
  }

  getAge(): number {
    return this.age
  }

  setAge(age: number): void {
    if (age > 0) {
      this.age = age
    }
  }

  // getter 和 setter
  // 通过getter和setter来控制属性的读取和修改
  // 这样会更加的安全
  get name() {
    return this._name
  }

  set name(name: string) {
    this._name = name
  }

  get age() {
    return this._age
  }

  set age(age: number) {
    if (age > 0) {
      this._age = age
    }
  }
}

const zs = new Preson("zs", 18)
console.log(zs)

console.log(zs.getName())

console.log(zs.name)

zs.name = "ls"

class A {
  public num: number
  constructor(num: number) {
    this.num = num
  }
}

class B extends A {
  test() {
    console.log(this.num)
  }
}

class C {
  constructor(public name: string, public age: number) {}
}

const c = new C("zs", 18)
console.log(c)
