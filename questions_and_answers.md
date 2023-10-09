
### 1. Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greetign = {};
console.log(greetign);

A: {}

B: ReferenceError: greetign is not defined

C: undefined

Answer : The answer is A: {}.From the question we see that variable is not define .Thats why the answer will be {}.

### 2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");

A: NaN

B: TypeError

C: "12"

D: 3

Answer : The answer is C: "12" .We know javascript perform type coercion .When sum function is called the argument 1 and "2" the operator concatinate this argument . 

### 3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError
Answer : The answer is B: ['🍝', '🍫', '🥑', '🍔'] . The code assign the value info.favoriteFood = "🍝".

### 4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

A: Hi there,

B: Hi there, undefined

C: Hi there, null

D: ReferenceError

Answer : The answer is B: Hi there, undefined .If sayHi function is called without passing any parameter it provides undefine .

### 5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

A: 1

B: 2

C: 3

D: 4

Answer : The correct answer ic C: 3 .The initial value of count is 0 and forEach truely element count is incremented by 1  and it will display 3 . 
