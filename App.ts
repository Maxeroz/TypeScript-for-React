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

// FUNCTIONS

let sayHi = () => {
  console.log("Hi, welcome");
};

let funcReturnString = (): string => {
  console.log("hi");
  return "lama dev";
};

let multiple = (num: number) => {
  return num * 2;
};

let multiple2 = (num: number): number => {
  return num * 2;
};

let multiple3 = (num: number): void => {
  //   return num * 2;
  //   Do sth but don't return
};

let sum = (num1: number, num2: number, another?: number) => {
  return num1 + num2;
};

sum(2, 3);

let func = (user: { username: string; age: number; phone?: string }) => {
  console.log(user.username);
};

// TYPE ALIASES

type UserType = {
  username: string;
  age: number;
  phone?: string;
};

let betterFunc = (user: UserType) => {
  console.log(user.username);
};

type myFunc = (a: number, b: string) => void;

let write: myFunc = (num, str) => {
  console.log(num + " times" + str);
};

type UserType2 = {
  username: string;
  age: number;
  phone?: string;
  theme: "dark" | "light";
};

const userWithTheme: UserType2 = {
  username: "Max",
  age: 27,
  phone: "+123456789",
  theme: "dark",
};

// INTERFACES

interface IUser {
  username: string;
  email: string;
  age: number;
}

interface IEmployee extends IUser {
  employeeID: number;
}

const emp: IEmployee = {
  username: "Thomas",
  email: "thomas@example.com",
  age: 23,
  employeeID: 2323,
};

const client: IUser = {
  username: "Tom",
  email: "tom@example.com",
  age: 17,
};

// GENERICS

interface IAuthor {
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICategory[];
}

interface IPostbetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe: IPostbetter<string> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: ["str", "str2"],
};

interface IPostEvenbetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe2: IPostEvenbetter<IAuthor> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1, username: "Tom" }],
};

const testMe3: IPostEvenbetter<ICategory> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1, title: "Photo" }],
};

// TYPESCRIPT REACT PROPS
// TYPESCRIPT REACT EVENTS
