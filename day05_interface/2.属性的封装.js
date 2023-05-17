var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Preson = /** @class */ (function () {
    function Preson(name, age) {
        this._name = name;
        this._age = age;
    }
    Preson.prototype.getName = function () {
        return this.name;
    };
    Preson.prototype.setName = function (name) {
        this.name = name;
    };
    Preson.prototype.getAge = function () {
        return this.age;
    };
    Preson.prototype.setAge = function (age) {
        if (age > 0) {
            this.age = age;
        }
    };
    Object.defineProperty(Preson.prototype, "name", {
        // getter 和 setter
        // 通过getter和setter来控制属性的读取和修改
        // 这样会更加的安全
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Preson.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            if (age > 0) {
                this._age = age;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Preson;
}());
var zs = new Preson("zs", 18);
console.log(zs);
console.log(zs.getName());
console.log(zs.name);
zs.name = "ls";
var A = /** @class */ (function () {
    function A(num) {
        this.num = num;
    }
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.test = function () {
        console.log(this.num);
    };
    return B;
}(A));
var C = /** @class */ (function () {
    function C(name, age) {
        this.name = name;
        this.age = age;
    }
    return C;
}());
var c = new C("zs", 18);
console.log(c);
