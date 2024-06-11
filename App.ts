// STRING NUMBER BOOLEAN

let testString: string;
testString = "hello";

let testBoolean: boolean;

testBoolean = true;

let testStringOrNumber: string | number;

testStringOrNumber = 10;
testStringOrNumber = "10";

// ARRAY

let names = ["john", "jane", "tom"];

names.push("mike");

let numbers = [11, 22, 33];
// numbers.push(true);
numbers.push(44);

let testStringArray: string[];
testStringArray = ["one", "two", "three"];

let testNumberArray: number[];
testNumberArray = [1, 2, 3];

let testStringOrNumberArray: (string | number)[];
testStringOrNumberArray = [1, "helloWorld"];

// OBJECTS

let user = {
  username: "John",
  age: 27,
  isAdmin: false,
};

user.username = "Mike";
user.age = 29;

// user.phone = "+123456789";

let userObj: {
  username: string;
  age: number;
  isAdmin: boolean;
};

userObj = {
  username: "John",
  age: 22,
  isAdmin: true,
};

let userObj2: {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};

userObj2 = {
  username: "Jane",
  age: 25,
  isAdmin: false,
  phone: "+123456789",
};

// ANY

let testAny: any;

testAny = 23;
testAny = "Max";
testAny = [1, 2, 3, 4];
testAny = {
  name: "Alex",
};

let testAnyArray: any[];
testAnyArray = [1, "two", { nubmer: "three" }];
