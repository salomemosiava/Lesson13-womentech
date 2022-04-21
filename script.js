// 1.
let user = {
    firstname: 'giorgi',
    lastname: 'smith',
    age: 25,
    studentstatus: 'active'
  };

  console.log(user.studentstatus);
  
// 2.
let myArray = [23, 9, 'Hello', 'Homework', 989, 100, 21, 'end'];

for (let item of myArray) {
    console.log(item)
};

let i = 0;
while (i < myArray.length) {
    console.log(myArray[i]);
    i++;
}

// 3.
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let item of numbers) {
    if (item > 5) {
        console.log(item);
    }
}


// 4.
let user2 = {
	name: 'giorgi',
	age:  20,
	studentstatus: 'active'
}

if (user2.age < 18) {
    console.log('Hello');
} else if (user2.name === 'giorgi') {
    console.log('Hello Giorgi!');
} else if (user2.studentstatus === 'active' || user2.age < 25) {
    console.log('Hello World!');
} else {
    console.log('error')
}



// 5.
let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ] ;
for (i = 0; i < array.length; i++) {
    if (typeof array[i] == "string") {
        console.log(array[i]);
    }
}


// 6.
let array2 = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ];
for (let x of array2) {
    for (let item of x) {
        if (item > 0) {
            console.log(item)
        }
    }
}

// 7.
let array3 = [32, 10, 'hello', null, 'hello2', 50 ];
for (let y of array3) {
    if (y % 5 == 0 && typeof y == 'number') {
        console.log(y);
    }
}


// დავალება ფუქციებზე

// 1) 
function sumNumbers (...args) {
    let sum = 0;
    for (let item of args) {
        if (item > 0) {
            sum += item;
            console.log(sum)
        }
    }
}
let answer1 = sumNumbers(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);

// 2.
let answer2 = sumNumbers(10, 50, 6, 7, 8, 11, 6, 3, 9);


// 3.
let user3 = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }

  function myFun () {
    if (user3.isloggedin == true ) {
        console.log(user3.firstname + ' ' + user3.lastname);
    } else {console.log(false)}
  }
  myFun ();


  // 4.
  let myArr = [1, 23, 888, 23, 2, 10, 6, 50, 6];

  function maxMath() {
    let max = 0;
    for (let item of myArr) {
      if (item > max) {
        max = item;
      }
    }
    console.log(max)
  }
  maxMath(myArr);