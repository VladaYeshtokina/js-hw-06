// const userInput = Number(prompt('Enter a number: '));

// if (userInput % 2) {
//   console.log("This is an odd number");
// } else if (!userInput) {
//   console.log("This is zero");
// } else {
//   console.log("This is an even number");
// }

// userInput % 2
//   ? console.log("This is an odd number")
//   : console.log("This is an even number") ;

// const a = 1010;
// const b = 180;

// if (a > 100 && b > 100) {
//  console.log(a > b ? a : b);
// } else {
//   console.log(b + 512);
// }

// let link = 'https://my-site.com/about/lll';

// if (!link.endsWith('/') && link.includes('my-site')) {
//   console.log(link += '/');
// }

// console.log(!link.endsWith("/") && link.includes('my-site') ? link += "/" : link);

// const hours = 2;

// if (hours < 17) {
//   console.log('Pending');
// } else if (hours >= 17 && hours <= 24) {
//   console.log('Expires');
// } else {
//   console.log('Overdue');
// }

// const daysUntilDeadline = 2;

// if (!daysUntilDeadline) {
//   console.log("Today");
// } else if (daysUntilDeadline === 1) {
//   console.log("Tomorrow");
// } else if (daysUntilDeadline === 2) {
//   console.log("Day after tomorrow");
// } else {
//   console.log("Day in the future");
// }

// switch (daysUntilDeadline) {
//   case 0:
//     console.log("Today");
//     break;

//   case 1:
//     console.log("Tomorrow");
//     break;

//   case 2:
//     console.log("Day after tomorrow");
//     break;

//   default:
//     console.log("Day in the future");
// }

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//   if (!(i % 5)) {
//     console.log(i);
//   }
// }

// const employees = 10;
// const salary = (Math.random() * (5000 - 500) + 500);
// const totalSalary = console.log((salary * employees).toFixed(2));

// const min = 1;
// const max = 7;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   if (!(i % 2)) {
//     total += i;
//     console.log(i);
//   }
// }

// console.log(total);

// let balance = 500;
// const payment = 2000;

//   console.log(
//   `The total amount of the order is ${payment} credits. The amount of available money in the account is checked`
// );

// if (payment <= balance) {
//   balance -= payment;
//   console.log(`${balance} credits left in the account`)
// } else  {
//   console.log('In the account are not enough credits for buying');
// }

//   console.log('The operation is over');

// let totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//   discount = 0.02;
// }
// else if (totalSpent >= 1000 && totalSpent < 5000) {
//   discount = 0.05;
// }
// else if (totalSpent >= 5000) {
//   discount = 0.1;
// }
// else {
//   console.log('You doesn`t have our partner discount yet');
// }

// payment -= discount * payment;

// console.log(`Processing your order. The total amount is ${payment} with the discount ${discount * 100}%`);

// totalSpent += payment;

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// припиняється і управління передається на наступну ітерацію.

// function formatMessage(message, maxLength) {
//   let result;

//   if (message.length > maxLength) {
//     message = message.slice(0, maxLength);
//     result = message + "...";
//   } else {
//     result = message;
//   }

//   return result;
// }

// formatMessage("Curabitur ligula sapien", 16);

// const array = [1, 6, 7, 5, 2, 8, 9];
// let ass = array.splice(3, 0, 10, 15);
// console.log(ass);
// console.log(array);

// const genres = ['Jazz', 'Blues'];

// genres.push("Rock and roll");
// console.table(genres);

// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.splice(0, 1, 'Country', 'Raggae'));

// const value = '8 11';

// const valueArray = value.split(' ');
// console.log(valueArray);
// const area = Number(valueArray[0]) * Number(valueArray[valueArray.length - 1]);
// console.log(area);

// const fruits = ['apple', 'grape', 'peach', 'banana', 'lemon'];

// for (let i = 0, j = 1; i < fruits.length; i += 1, j += 1) {
//   console.log(`${j}: ${fruits[i]}`);
// }

// let names = 'Jacob,William,Solomon,Artem';
// let phones = '890123,586974,258769,147354';

// names = names.split(',');
// phones = phones.split(',');
// console.log(names, phones);

// for (
//   let i = 0, k = 1;
//   i < names.length, i < phones.length;
//   i += 1, k += 1
// ) {
//   console.log(`${k}. ${names[i]} - ${phones[i]}`);
// }

// let string = 'Welkome to the future';
// string = string.split(' ');

// string.shift();
// string.pop();

// string = string.join(' ');
// console.log(string);

// string = string.split(' ').slice(1, -1).join(' ');
// console.log(string);

// string = string.split('').reverse().join('');
// console.log(string);

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// console.log(langs.sort());

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];

// for (const value of numbers) {
//   if (value < min) {
//     min = value;
//   }
// }

// console.log(min);

// const array = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let totalSum = 0;

// for (let i = 0; i < array.length; i += 1) {
//   totalSum += array[i];
// }

// for (const value of array) {
//   totalSum += value;
// }

// console.log(totalSum);

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 === 0) {
//     total += numbers[i];
//   }
// }

// for (const number of numbers) {
// if (number % 2 !== 0) {
//   continue;
// }
//   total += number;

// }

// console.log(total);

// const logins = ['jfhugy', '7hdnjdk', 'njusdh4', 'yshendhc9'];
// const loginToFind = 'njusdh4';
// let message = '';

//  for (let i = 0; i < logins.length; i += 1) {
//   if (logins[i] === loginToFind) {
//    message = `User ${logins[i]} is found`;
//     break;
//   }
//   message = `User ${logins[i]} is not found`;
// }

// console.log(message);

// for (const login of logins) {
//   if (login === loginToFind) {
//     console.log(`User ${login} is found`);
//   }
// }

// logins.includes(loginToFind)
//   ? console.log(`User ${loginToFind} is found`)
//   : console.log(`User is not found`);

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log(smallestNumber);

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// for (const friend of friends) {
//   string += friend + ",";
// }
// string = string.slice(0, string.length - 1);
// console.log(string);

// string = friends.join(",");
// console.log(string);

// let string = 'JavaScript';
// string = string.split('');
// console.log(string);

// let array = [];

// for (let i = 0; i < string.length; i += 1) {
//   let char = string[i];
//     if (char === char.toUpperCase()) {
//       char = char.toLowerCase();
//       console.log(char);

//     } else {
//       char = char.toUpperCase();
//       console.log(char);
//     }
//   array.push(char);
// }
// console.log(array);

// const string = "JavaScript";
// const letters = string.split("");

// let invertedString = '';

// for (let letter of letters) {
//   if (letter === letter.toUpperCase()) {
//     invertedString += letter.toLowerCase();
//   } else {
//     invertedString += letter.toUpperCase();
//   }
// }

// console.log(invertedString);

// const title = 'Top 10 benefits of React framework';
// const slug = title.split(' ').join('-').toLowerCase();
// console.log(slug);

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2);

// for (const number of numbers) {
//   total += number;
// }

// console.log(total);

// const cards = ["Card-1", "Card-2", "Card-3", "Card-4", "Card-5"];
// console.log(cards);

// const cardToRemove = "Card-3";
// cards.splice(cards.indexOf(cardToRemove), 1);
// console.log(cards);

// const index = 3;
// const cardToInsert = "Card-6";
// cards.splice(index, 0, cardToInsert);
// console.log(cards);

// const cardToUpdate = "Card-4";
// cards.splice(cards.indexOf(cardToUpdate), 1, 'Update card-4');
// console.log(cards);

// function calcBMI(weight, height) {
//   weight = Number(weight.replace(',', '.'));
//   height = Number(height.replace(",", "."));

//   return Number((weight / (height ** 2)).toFixed(1));
// }

// console.log(calcBMI("57", "1.70"));

// function min(a, b) {
//   if (a < b) {
//     return a;
//   }
//   return b;

// a < b ? a : b;
// }

// console.log(min(-45, 10));

// function getRectArea(dimensions) {
//   dimensions = dimensions.split(' ');
//   console.log(dimensions);

//   return Number(dimensions[0]) * Number(dimensions[1]);
// }

// console.log(getRectArea('5 88'));

// function logItems(items) {
//   for (let i = 0, j = 1; i < items.length; i += 1, j += 1) {
//    console.log(`${j} - ${items[i]}`)
//   }
// }

// logItems(['first', 'second', 'dddd', '6y6y6y']);

// function printContactsInfo(names, phones) {
//   names = names.split(',');
//   phones = phones.split(',');
//   console.log(names);
//   console.log(phones);

//   for (let i = 0; i < names.length, i < phones.length; i += 1) {
//     console.log(`${names[i]} - ${phones[i]}`);
//   }

// }

// printContactsInfo('Ann,John,Jim,Bill', '123,456,789,101');

// function findLargestNumber(numbers) {
//   let LargestNumber = 0;

//   for (const number of numbers) {
//     if (number > LargestNumber) {
//       LargestNumber = number;
//     }
//     continue;
//   }
//   return LargestNumber;
// }

// console.log(findLargestNumber([2, 17, 194, 1, 123, 37]));

// *********************************************
// function findLargestNumber() {
//   const numbers = [...arguments];
//   console.log(numbers);

//   let max;

//   for (const number of numbers) {
//     if (typeof number === "number") {
//       max = number;
//       break;
//     }
//   }

//   for (const number of numbers) {
//     if (typeof number === 'number') {
//       if (number > max) {
//         max = number;
//       }
//     } else {
//       max = findLargestNumber(...number);
//     }
//   }
//   return max;
// }
// console.log(findLargestNumber([2, 555, 9], 17, 94, 1, 23));
// *****************************************************

// function calAverage() {
//   let total = 0;

//   for (let number of arguments) {
//     total += number;
//   }

//   return total / arguments.length;
// }

// console.log(calAverage(5, 2, 9, 7, 6, 3));

// function getExtremeElements(array) {
//   return [array.shift(), array.pop()];
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// getExtremeElements(["Earth", "Mars", "Venus"]);
// getExtremeElements(["apple", "peach", "pear", "banana"]);

// function splitMessage(message, delimiter) {
//   let words;
//   if (message.includes(delimiter)) {
//     words = message.split(delimiter);
//   }
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));
// console.log(splitMessage("best5for5week", "5"));
// console.log(splitMessage("Mango hurries to the train", " "));

// function calculateEngravingPrice(message, pricePerWord) {
//   return message.split(" ").length * pricePerWord;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));

// function slugify(title) {
//   return title.split(" ").join("-").toLowerCase();
// }
// console.log(slugify("Arrays for begginers"));

// function makeArray(firstArray, secondArray, maxLength) {

//   const array = firstArray.concat(secondArray);
//   if (array.length > maxLength) {
//     array.length = maxLength;
//   }
//   return array;
// }
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));

// function makeArray(firstArray, secondArray, maxLength) {
//   console.log(maxLength);
//   let array = firstArray.concat(secondArray);
//   if (array.length > maxLength) {
//     array = array.slice(0, maxLength);
//   }
//   return array;
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));

// function formatTime(minutes) {
//   const hours = Math.floor(minutes / 60);
//   minutes = minutes % 60;
//   return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
// }
// console.log(formatTime(70));

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// function addCourse(course) {
//   if (courses.includes(course)) {
//     return 'You already have this course'
//   }
//   courses.push(course);
// }
// addCourse('Express');
// console.log(courses);

// function removeCourse(course) {
//   if (courses.includes(course)) {
//     courses.splice(courses.indexOf(course), 1);
//     return;
//   }
//   return "This course name is not found";
// }
// removeCourse("CSS");
// console.log(courses);
// console.log(removeCourse("Vue"));

// function updateCourse(oldCourse, newCourse) {
//   const idx = courses.indexOf(oldCourse);
//   if (idx === -1) {
//     return "This course name is not found";
//   }
//   courses.splice(idx, 1, newCourse);
//   return;
// }

// or

// function updateCourse(oldCourse, newCourse) {
//   const idx = courses.indexOf(oldCourse);
//   if (!!~idx) {
//     courses.splice(idx, 1, newCourse);
//     return;
//   }
//   return "This course name is not found";
// }

// updateCourse("CSS", 'C#');
// console.log(courses);
// console.log(updateCourse("C++", 'C#'));

// function calculateTotal(value) {
//   let total = 0;
//   console.log(total);
//   for (let i = value; i <= value; i -= 1) {
//     total += i;
//   }
//   console.log(total);
//   return total;
// }

// console.log(calculateTotal(3));

// function findLongestWord(string) {
//   const words = string.split(' ');
//   let wordLength = words[0];

//   for (let i = 1; i < words.length; i += 1) {
//     if (wordLength.length < words[i].length) {
//       wordLength = words[i];
//     }
//   }
//   return wordLength;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

// function filterArray(numbers, value) {
//   const array = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       array.push(numbers[i]);
//     }
//   }
//   return array;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));

// function getCommonElements(array1, array2) {

// const commonArray = [];
//   for (let i = 0; i < array1.length || i < array2.length; i += 1) {
//     if (array2.includes(array1[i])) {
//     commonArray.push(array1[i]);
//     }
//   }
//   return commonArray;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// function includes(array, value) {
//   for (const el of array) {
//     if (el === value) {
//       return "true";
//     }
//   }
//    return "false";
// }

// function includes(array, value) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
// );

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// user.obj = {
//   whether: 'good',
//   day: 'Monday',
//   relax: false
// };
// console.log(user);

// const keys = Object.keys(user);
// const values = Object.values(user);

// for (let key of keys) {
//   console.log(user[key]);
// }

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;

// for (const key in salaries) {
//   sum += salaries[key];
// }
// console.log(`Total amount of salaries is ${sum}`);

// const stones = [
//   {
//     name: "Emerald",
//     price: 300,
//     guantity: 4,
//   },
//   {
//     name: "Diamond",
//     price: 300,
//     guantity: 3,
//   },
//   {
//     name: "Sapphire",
//     price: 300,
//     guantity: 7,
//   },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       return `Total cost is ${stone.price * stone.guantity}`;
//     }
//   }
//   return 'It is not found';
// }
// console.log(calcTotalPrice(stones, "Sapphire"));

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };
// Object.freeze(Transaction);

// const account = {
//   balance: 0,
//   transactions: [],

//   createTransaction(amount, type) {
//     return {
//       id: Date.now(),
//       amount,
//       type,
//     };
//   },

//   deposit(amount) {
//     if (amount <= 0) {
//       return "Error";
//     }
//     const item = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(item);
//     this.balance += amount;
//   },

//   withdraw(amount) {
//     if (amount > this.balance || amount <= 0) {
//       return "It is not enough the amount of money in a bank account ";
//     }
//     const item = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(item);
//     this.balance -= amount;
//   },

//   getBalance() {
//     return this.balance;
//   },

//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//     return 'Empty';
//   },

//   getTransactionTotal(type) {
//     let total = 0;

//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         total += transaction.amount;
//       }
//     }
//     return total;
//   },

// };

// console.log(account.deposit(500));
// console.log(account.deposit(500));
// console.log(account.withdraw(200));
// console.log(account.transactions);
// // console.log(account.getBalance());
// // console.log(account.getTransactionDetails(17));
// console.log(account.getTransactionTotal("deposit"));

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];

// const findFriendByName = function (allFriends, name) {
//   for (const friend of allFriends) {
//     if (friend.name === name)
//       return `A friend with name ${name} is found`;
//   }
//   return `A friend with name ${name} is not found`;
// }
// console.log(findFriendByName(friends, 'Poly'));

// const getAllNames = function (allFriends) {
//   const friends = [];
//   for (const friend of allFriends) {
//     friends.push(friend.name);
//   }
//   return friends;
// }
// console.log(getAllNames(friends));

// const getOnlineFriends = function (allFriends) {
//   const names = [];
//   for (const friend of allFriends) {
//     if (friend.online) {
//       names.push(friend.name);
//     }
//   }
//   return names;
// }
// console.log(getOnlineFriends(friends));

// const getOflineFriends = function (allFriends) {
//   const names = [];
//   for (const friend of allFriends) {
//     if (!friend.online) {
//       names.push(friend.name);
//     }
//   }
//   return names;
// };
// console.log(getOflineFriends(friends));

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//  values.push(apartment[key]);

// }
// console.log(keys);
// console.log(values);

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const value of colors) {
//   hexColors.push(value.hex);
//   rgbColors.push(value.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
// }
// console.log(getProductPrice("Radar"));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {

//   const propValue = [];
//   for (const obj of products) {
//     for (const key in obj) {
//       if (key === propName) {
//        propValue.push(obj[key]);
//       }
//     }

//   }
// return propValue;
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: highToday,
//   today: {
//     low: lowToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: highTomorrow,
//   tomorrow: {
//     low: lowTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// console.log(forecast.today.low);
// console.log(lowToday);

// const user = {
//   name: 'Ann',
//   age: 12,
//   skills: {
//     html: true,
//     css: true,
//   }
// };

// const {
//   name,
//   age,
//   skills: { html: hTML, css },
// } = user;

// console.log(name);
// console.log(hTML);
// console.log(css);

// function findMatches(array1, ...array2) {
//   const matches = [];

//   for (const item2 of array2) {
//     for (const item1 of array1) {
//       if (item2 === item1) {
//         matches.push(item2);
//       }
//     }
//   }
//   return matches;
// }
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line

//     this.potions.splice(this.potions.indexOf(potionName), 1);
//     return this.potions;
//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   addPotion(newPotion) {

//     this.potions.push(newPotion);
//     return this.potions;
//   },

// removePotion(potionName) {
//   const potionIndex = this.potions.indexOf(potionName);

//   if (potionIndex === -1) {
//     return `Potion ${potionName} is not in inventory!`;
//   }

//   this.potions.splice(potionIndex, 1);
// },
// updatePotionName(oldName, newName) {
//   const potionIndex = this.potions.indexOf(oldName);

//   if (potionIndex === -1) {
//     return `Potion ${oldName} is not in inventory!`;
//   }

//   this.potions.splice(potionIndex, 1, newName);
// },
// };

// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 520 }));

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };
// Object.freeze(Transaction);

// const account = {
//   balance: 0,
//   transactions: [{id: 16, amount:20, type: 'deposit'}],

// createTransaction(amount, type) {
//   return {
//     amount,
//     type,
//   };
// },

// deposit(amount) {
//   if (amount < 0) {
//     return 'Error!';
//   }
//   this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
//   this.balance += amount;
//   return this.balance;
// },

// withdraw(amount) {
//   if (amount > this.balance || amount <= 0) {
//     return 'It is not enough money on the balance';
//   }
//   this.transactions.push(
//     this.createTransaction(amount, Transaction.WITHDRAW)
//   );
//   this.balance -= amount;
//   return this.balance;
// },
// };

// console.log(account.createTransaction(15, "deposit"));
// console.log(account.deposit(30));
// console.log(account.deposit(40));
// console.log(account.transactions);
// console.log(account.withdraw(10));
// console.log(account.withdraw(20));
// console.log(account.transactions);

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//     return this.potions;
//   },

//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//         this.potions.splice(this.potions.indexOf(potion), 1);
//         return this.potions;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//         return this.potions;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };

// const card = {
//   items: [],
//   getItems() {
//     return this.items;
//   },

//   add(product) {

//     for (const item of this.items) {
//       if (item.name === product.name) {
//       item.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },

//   remove(productName) {
//     const { items } = this;
//     for (const item of items) {
//       if (item.name === productName) {
//         items.splice(items.indexOf(item), 1);
//         return items;
//       }
//     }
//     return `This ${productName} is not found`;
//   },

//   clear() {
//     this.items = [];
//   },

//   countTotalPrice() {
//     const { items } = this;

//     let total = 0;
//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }
//     return total;
//   },

//   increaseQuantity(productName) {
//     for (const item of this.items) {
//       if (productName === item.name) {
//         item.quantity += 1;
//       }
//     }
//     return this.items;
//   },

//   decreaseQuantity(productName) {
//     for (const item of this.items) {
//       if (productName === item.name) {
//         item.quantity -= 1;
//       }
//     }
//     return this.items;
//   },
// };

// card.add({ name: 'Apple', price: 50 });
// card.add({ name: "Pear", price: 60 });
// card.add({ name: "Grape", price: 60 });
// card.add({ name: "Peach", price: 110 });

// function createContact(partialContact) {
//   return { id: Math.random(), createdAt: new Date(), list: 'default', ...partialContact };
// }

// console.log(createContact({
//   name: 'Mango',
//   email: 'mango@mail.com',
//   list: 'friend',
// }));

// console.log(
//   createContact({
//     name: "Peach",
//     email: "each@mail.com",
//   })
// );

// function processCall(recipient, onAvailable, onNotAvailable) {
//   const isRecipientAvailable = Math.random() > 0.5;
//   console.log(isRecipientAvailable);

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Полі", takeCall, leaveHoloMessage);

// const names = [
//   "Hole-in-one!",
//   "Eagle",
//   "Birdie",
//   "Par",
//   "Bogey",
//   "Double Bogey",
//   "Go Home!",
// ];

// function rentalCarCost(d) {
//   // Your solution here
//   const rentCost = 40;
//   let total = rentCost * d;

//   if (d >= 7) {
//     total = rentCost * d - 50;
//   } else if (d >= 3) {
//     total = rentCost * d - 20;
//   }
//   return total;
// }

// console.log(rentalCarCost(18));

// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   if (value === "") {
//     delete records[id][prop];
//   } else if (prop !== "tracks" && value !== "") {
//     records[id][prop] = value;
//   } else if (prop === "tracks" && value !== "") {
//     if (records[id].hasOwnProperty("tracks") === false) {
//       records[id][prop] = [];
//     }
//     records[id][prop].push(value);
//   }

//   return records;
// }

// console.log(recordCollection);
// console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
// console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
// console.log(updateRecords(recordCollection, 2548, "artist", ""));

// Failed:After updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracks should have the string Addicted to Love as the last element.
// Failed:After updateRecords(recordCollection, 2468, "tracks", "Free"), tracks should have the string 1999 as the first element.
// Failed:After updateRecords(recordCollection, 2548, "tracks", ""), tracks should not be set
// Failed:After updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitle should be the string Riptide

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage("Royal Grand", makePizza));

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     for (const pizza in this.pizzas) {
//       if (pizzaName === this.pizzas[pizza]) {
//         return onSuccess(pizzaName);
//       }
//     }
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// Change code above this line

// Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function callback(element, index) {
//     totalPrice += element;
//     console.log(element);
//   });
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// const filter = function (array, test) {
//   const result = [];

//   for (const el of array) {
//     if (test(el)) {
//       result.push(el);
//     }
//   }
//   return result;
// };

// const success = function (value) {
//   return value >= 3;
// }

// console.log(filter([1, 2, 3, 8, 9, 10, 11], success));

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// };

// console.log(filterArray([10,25,3], 5));

// const changeEven = (numbers, value) => {
//   const newNumbers = [];

//   numbers.forEach(element => {
// element % 2 === 0 ? newNumbers.push(element + value) : newNumbers.push(element);

//   });
//   return newNumbers;
// };
// console.log(changeEven([1, 2, 3, 4, 5], 10));

// function each(arr, callback) {
//   let total = 0;

//   arr.forEach((element) => (total = callback(total, element)));
//   return total;
// }

// const sum = (first, second) => first + second;
// const division = (first, second) => first / second;

// console.log(each([5, 4, 1], sum));

// function multiplyAll(arr) {
//   let product = 1;

//   arr.forEach(elements => {
//     for (const el of elements) {
//       product *= el;
//     }
//   });
//   return product;
// }

// console.log(multiplyAll([
//   [1, 2],
//   [3, 4],
//   [5, 6, 7],
// ]));

//   function multiply(arr, n) {
//     if (n <= 0) {
//       return 1;
//     } else {
//       return multiply(arr, n - 1) * arr[n - 1];
//     }
//   }
// console.log(multiply([5,6,9,1,7], 3));

// const createProduct = (obj, callback) => callback({
//     id: Math.round(Math.random() * 100),
//     ...obj,
//   });
//

// const logProduct = product => console.log(`Product name ${product.name}`);
// const logTotalPrice = ({ price, quantity }) => console.log(`Total price ${price * quantity}`);

// createProduct({ name: "apple", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "lemon", price: 20, quantity: 5 }, logTotalPrice);

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: "Jacob",
//   balance: 400,

//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError("TRANSACTION_LIMIT");
//       return;
//     } else if (amount > this.balance) {
//       onError("Not enough on the account");
//       return;
//     }

//     this.balance -= amount;
//     onSuccess(`Transaction complete. The balance is ${this.balance}`);
//     return;
//   },

//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError("TRANSACTION_LIMIT");
//       return;
//     } else if (amount <= 0) {
//        onError("Not enough the amount");
//        return;
//     }

//     this.balance += amount;
//     onSuccess(`Transaction complete. The balance is ${this.balance}`);
//     return;

//   },
// };

// const handleSuccess = (message) => console.log(`Success! ${message}`);
// const handleError = (message) => console.log(`Error! ${message}`);

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);

// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-5, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// const logItems = items => items.forEach((item, idx) => console.log(`${idx + 1} - ${item}`));
// logItems(['mango', 'pear', 'watermelon', 'peach']);

// const calculateAverage = (...args) => {
//   let total = 0;
//   args.forEach(arg => total += arg);
//   return total / args.length;
// };

// console.log(calculateAverage(1,2,3,4));

// const students = [
//   { name: "Манго", score: 83, courses: ["математика", "фізика"] },
//   { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
//   { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
//   { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
// ];

// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map((student) => student.name);
// console.log(names);

// const nameS = students.map(({ name, courses }) => { });
// console.log(nameS);

// const totalTimePlayed = students.reduce(
//   (total, { score }) => total + score,
//   0
// );
// console.log(totalTimePlayed);

// const cart = [
//   { label: "Apples", price: 100, quantity: 2 },
//   { label: "Bananas", price: 120, quantity: 3 },
//   { label: "Lemons", price: 70, quantity: 4 },
//   { label: "Pears", price: 105, quantity: 2 },
// ];

// const totalAmount = cart.reduce(
//   (total, { price, quantity }) => total + price * quantity,
//   0
// );
// console.log(totalAmount);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// console.log(allTags);

// better variant is
//  const allTags = tweets.flatMap( t => t.tags);
// console.log(allTags);

// const tagsStats = allTags.reduce((acc, tag) => ({
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   }
// ), {} );
// console.log(tagsStats);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];

// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, idx, arr) => arr.indexOf(genre) === idx
// );
// console.log(allGenres);
// console.log(uniqueGenres);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter((user) => user.eyeColor === color).map(user => user.name);
// };
// console.log(getUsersWithEyeColor(users, "blue"));

// const users =
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUsersWithEyeColor = (users, minAge, maxAge) => {
//   return users.filter((user) => user.age >= minAge && user.age <= maxAge);
// };
// console.log(getUsersWithEyeColor(users, 20, 30));

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter((user) => user.friends.includes(friendName));
// };
// console.log(getUsersWithFriend(users, "Briana Decker"));

// const getFriends = (users) => {
//   return users
//     .flatMap((user) => user.friends)
//     .filter((friend, idx, arr) => arr.indexOf(friend) === idx);
// };
// console.log(getFriends(users));

// const getTotalFriendCount = (users) => {
//   return users.reduce(
//     (total, user) => total += user.friends.length,
//     0
//   );
// };
// console.log(getTotalFriendCount(users));

// const sortByDescendingFriendCount = (users) => {
//   return [...users].sort(
//     (firstCount, secondCount) =>
//       secondCount.friends.length - firstCount.friends.length
//   );
// };
// console.log(sortByDescendingFriendCount(users));

// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter((user) => user.gender === gender)
//     .reduce((total, name) => (total += name.balance), 0);
// };
// console.log(getTotalBalanceByGender(users, "male"));
// console.log(getTotalBalanceByGender(users, "female"));

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce(
//   (total, player) => total += player.playtime / player.gamesPlayed,
//   0
// );
// console.log(totalAveragePlaytimePerGame);

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort(
//   (firstDate, secondDate) => firstDate - secondDate
// );
// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];

// const authorsInAlphabetOrder = [...authors].sort();
// const authorsInReversedOrder = [...authors].sort((firstName, secondName) =>
//   secondName.localeCompare(firstName)
// );
// console.log(authorsInReversedOrder);

// const cars = [
//   { make: "Honda", model: "CR-V", type: "suv", amount: 14, price: 24045, onSale: true, },
//   { make: "Honda", model: "Accord", type: "sedan", amount: 2, price: 19455, onSale: true, },
//   { make: "Mazda", model: "Mazda 6", type: "sedan", amount: 8, price: 24195, onSale: false, },
//   { make: "Mazda", model: "CX-9", type: "suv", amount: 7, price: 31520, onSale: true, },
//   { make: "Toyota", model: "4Runner", type: "suv", amount: 19, price: 34210, onSale: false, },
//   { make: "Toyota", model: "Sequoia", type: "suv", amount: 16, price: 45560, onSale: false, },
//   { make: "Toyota", model: "Tacoma", type: "truck", amount: 4, price: 24320, onSale: true, },
//   { make: "Ford", model: "F-150", type: "truck", amount: 11, price: 27110, onSale: true, },
//   { make: "Ford", model: "Fusion", type: "sedan", amount: 13, price: 22120, onSale: true, },
//   { make: "Ford", model: "Explorer", type: "suv", amount: 6, price: 31660, onSale: false, },
// ];

// const getModels = (cars) => {
//   return cars.map((car) => car.model);
// };
// console.log(getModels(cars));

// const makeCarsWithDiscount = (cars, discount) =>{
//   return cars.map((car) => ({
//     ...car,
//     price: car.price * (1 - discount)
//   }))
// };
// console.log(makeCarsWithDiscount(cars, 0.2));

// const filterByPrice = (cars, threshold) => {
//   return cars.filter(({price}) => price < threshold);
// };
// console.log(filterByPrice(cars, 20000));

// const getCarsOnSale = cars => cars.filter(({ onSale }) => onSale);
// console.log(getCarsOnSale(cars));

// const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);
// console.log(getCarsWithType(cars, 'suv'));
// console.log(getCarsWithType(cars, 'sedan'));

// const getCarByModel = (cars, model) => cars.find((car) => car.model === model);
// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

// const sortByAscendingAmount = (cars) =>
//   [...cars].sort((firstAmount, secondAmount) => firstAmount.amount - secondAmount.amount);
// console.table(sortByAscendingAmount(cars));

// const sortByDescendingAmount = (cars) =>
//   [...cars].sort(
//     (firstAmount, secondAmount) => secondAmount.amount - firstAmount.amount
//   );
// console.table(sortByDescendingAmount(cars));

// const sortByOrder = (cars, order) => {
//   return [...cars].sort((a, b) =>
//     order === "asc"
//       ? a.model.localeCompare(b.model)
//       : b.model.localeCompare(a.model)
//   );
// };
// console.table(sortByOrder(cars, 'asc'));
// console.table(sortByOrder(cars, "desc"));

// const getTotalAmount = cars => cars.reduce((total, car) => total += car.amount, 0);
// console.table(getTotalAmount(cars));

// const getAvailableCarNames = (cars) =>
//   cars.filter(({ onSale }) => onSale).map(({model}) => model);
// console.log(getAvailableCarNames(cars));

/**
 * Get cars on sale and ascending sort them
 * @param {Array} cars - array with object
 * @returns {Array} -sorted array on sale
 */
// const getSortedCarsOnSale = (cars) =>
//   cars.filter(({ onSale }) => onSale)
//     .sort(({ price: a }, { price: b }) => a-b);
// console.log(getSortedCarsOnSale(cars));

// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   for (let i = 0; i < contacts.length; i += 1) {
//     if (contacts[i].firstName === name) {
//       return contacts[i][prop] || "No such property";
//       }
//     }
//     return "No such contact";
//   }

// // console.log(lookUpProfile("Akira", "likes"));
// console.log(lookUpProfile("Kristian", "lastName"));

// const string = 'jfuhepodkurjfjfurkdieldovnfhtbgyfnvjdapkdi';

// const charCount = (string) => string.split('') або [...string]
//   .reduce((count, char) => {
//     count[char] = (count[char] || 0) + 1;
//     return count;
//   }, {});

// 1) count.hasOwnProperty(char) ? (count[char] += 1) : (count[char] = 1);
// 2) char in count ? (count[char] += 1) : (count[char] = 1);
// 3) const key = Object.keys(count);
//    key.includes(char) ? (count[char] += 1) : (count[char] = 1);

// console.log(charCount(string));

// const cars = [ "Honda", "Mazda", "Toyota", "Ford"];

// const result = arr.reduce((acc, item) => {

// }, 0);

// function zeroArray(m, n) {
//   const newArray = [];
//   for (let i = 0; i < m; i += 1) {
//     const row = [];
//     for (let j = 0; j < n; j += 1) {
//       row.push(j + 1);
//     }
//     newArray.push(row);
//   }
//   return newArray;
// }

// let matrix = zeroArray(5, 3);
// console.log(matrix);

// function filteredArray(arr, elem) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (!arr[i].includes(elem)) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(
//   filteredArray(
//     [
//       [3, 2, 3],
//       [1, 6, 3],
//       [3, 13, 26],
//       [19, 3, 9],
//     ],
//     3
//   )
// );

// console.log(
//   filteredArray(
//     [
//       [10, 8, 3],
//       [14, 6, 23],
//       [3, 18, 6],
//     ],
//     18
//   )
// );

// let users = {
//   Alan: {
//     age: 27,
//     online: true,
//   },
//   Jeff: {
//     age: 32,
//     online: true,
//   },
//   Sarah: {
//     age: 48,
//     online: true,
//   },
//   Ryan: {
//     age: 19,
//     online: true,
//   },
// };

// function isEveryoneHere(userObj) {
//   return ["Alan", "Jeff", "Sarah", "Ryan"].every((name) =>
//     userObj.hasOwnProperty(name)
//   );
// }
// console.log(isEveryoneHere(users));

// const users = {
//   Alan: {
//     online: false,
//   },
//   Jeff: {
//     online: true,
//   },
//   Sarah: {
//     online: false,
//   },
// };

// function countOnline(allUsers) {

//   let count = 0;
//   for (const key in allUsers) {
//     if (allUsers[key].online) {
//       count += 1;
//     }
//   }
//   return count;
// }

// console.log(countOnline(users));

// function reverseString(str) {
//   let newStr = "";
//   for (let i = str.length - 1; i < str.length && i >= 0; i -= 1) {
//     newStr += str[i];
//   }
//   return newStr;
// }
// console.log(reverseString("hello"));

// function findLongestWordLength(str) {

//   const longestWord = str.split(" ").reduce((acc, word) => {
//     if (word.length > acc.length) {
//      acc = word;
//     }
//     return acc;
//   }, []);
//   return longestWord.length;
// }

// return str
//   .split(" ")
//   .reduce((longest, word) => Math.max(longest, word.length), 0);

// console.log(
//   findLongestWordLength("The quick brown fox jumped over the lazy dog")
// );

// function largestOfFour(arr) {
//   return arr.map(subArr => subArr.reduce((prev, current) =>
//     current > prev ? current : prev));
// }
// console.log(largestOfFour([
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1],
// ]));

// console.log(
//   largestOfFour([
//     [17, 23, 25, 12],
//     [25, 7, 34, 48],
//     [4, -10, 18, 21],
//     [-72, -3, -17, -10],
//   ])
// );

// function confirmEnding(str, target) {
//   return str.slice(str.length - target.length) === target;
// }
// console.log(confirmEnding("Bastian", "an"));

// function repeatStringNumTimes(str, num) {
//   if (num < 0) {
//     return "";
//   }
//   let newStr = "";
//   for (let i = num; i <= num && i > 0; i -= 1) {
//     newStr += str;
//   }
//   return newStr;
// }
// console.log(repeatStringNumTimes("abc", 3));

// function truncateString(str, num) {
//   let newStr = '';
//  return str.length > num ? newStr = `${str.slice(0, num)}...`: str;
// }
// console.log(
//   truncateString(
//     "A-tisket a-tasket A green and yellow basket",
//     "A-tisket a-tasket A green and yellow basket".length + 2
//   )
// );

// function findElement(arr, func) => arr.find(func);
// console.log(findElement([1, 8, 3, 3], (num) => num % 2 === 0));

// function booWho(bool) {
//   return typeof bool === "boolean" ? true : false;
// }
// console.log(booWho(null));
// console.log(booWho([1, 2, 3]));
// console.log(booWho(false));

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("hello"));

// function findLongestWordLength(str) {
//   const longestWord = str.split(' ').reduce((acc, word) => {
//   word.length > acc.length ? acc = word : acc;
//   return acc;
//   });
//   return longestWord.length;
// }
// console.log(
//   findLongestWordLength("The quick brown fox jumped over the lazy dog")
// );

// function largestOfFour(arr) {
//   const newArr = arr.map(subArr => subArr.reduce((acc, elem) => acc = Math.max(acc, elem)
//   ));
//   return newArr;
// }

// console.log(
//   largestOfFour([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1],
//   ])
// );

// function confirmEnding(str, target) {
//   return str.slice(-target.length) === target;
// }
// console.log(confirmEnding("Bastian", "n"));
// console.log(confirmEnding("Congratulation", "on"));
// console.log(confirmEnding("Connor", "n"));

// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(5));

// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countdown(n - 1);
//     countArray.unshift(n);
//     return countArray;
//   }
// }
// console.log(countdown(5));

// function rangeOfNumbers(startNum, endNum) {
//   if (endNum < startNum) {
//     return [];
//   } else {
//     const count = rangeOfNumbers(startNum, endNum - 1);
//     count.push(endNum);
//     return count;
//   }
// }
// console.log(rangeOfNumbers(1, 5));
// console.log(rangeOfNumbers(4, 4));

// function repeatStringNumTimes(str, num) {
//   if (num < 1) {
//     return '';
//   } else {
//     return str + repeatStringNumTimes(str, num - 1);
//   }
// }
// console.log(repeatStringNumTimes("abc", 3));

// function truncateString(str, num) {
//   return str.length > num ? `${str.slice(0, num)}...` : str;
// }
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// console.log(
//   truncateString(
//     "A-tisket a-tasket A green and yellow basket",
//     "A-tisket a-tasket A green and yellow basket".length + 2
//   )
// );

// function titleCase(str) {
//   const newStr = str
//     .toLowerCase()
//     .split(" ")
//     .reduce((acc, word) => {
//       acc.push(
//         [...word]
//           .map((char, idx) => (idx === 0 ? char.toUpperCase() : char))
//           .join("")
//       );
//       return acc;
//     }, []);

//   return newStr.join(' ');
// }
// console.log(titleCase("I'm a little tea pot"));


// function frankenSplice(arr1, arr2, n) {  
//   return [...arr1, ...arr2.filter((elem, idx) => idx >= n)]; 
// }
// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
// console.log(frankenSplice([1, 2], ["a", "b"], 1));

// function frankenSplice(arr1, arr2, n) {
//   const copy = arr2.slice();  
//   copy.splice(n, 0, ...arr1);
//   return copy;
// }
// console.log(frankenSplice([1, 2], ["a", "b"], 1));


// function bouncer(arr) {
//   const newArr = arr.reduce((acc, elem) => {
//     if (Boolean(elem) === true) {
//       acc.push(elem);
//     }    
//     return acc;  
//   }, [])
//   return newArr;
// }
// console.log(bouncer([7, "ate", "", false, 9]));


// function getIndexToIns(arr, num) {
//   return arr
//     .concat(num)
//     .sort((elem1, elem2) => elem1 - elem2)
//     .indexOf(num);  
// }
// console.log(getIndexToIns([40, 60, 30, 20, 90], 50));


// function mutation(arr) {
//   return arr[1]
//     .toLowerCase()
//     .split("")
//     .every(letter => arr[0].toLowerCase().indexOf(letter) !== -1);
// }
// console.log(mutation(["HEllo", "hey"]));
// console.log(mutation(["floor", "for"]));


// function chunkArrayInGroups(arr, size) {
  
//   const newArr = [];
//   for (let i = 0; i < arr.length; i += size) {
//   newArr.push(arr.slice(i, i+size));
//   }
//   return newArr;
// }

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));


// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const { price, quantity } = this.stones.find(({name}) => name === stoneName);
//     return price * quantity;
//   },
// };
// console.log(chopShop.calcTotalPrice("Emerald"));


// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;  
//   },
//   add() {    
//     return (this.a ?? 0) + (this.b ?? 0);
//   },
//   mult() {    
//     return (this.a ?? 0) * (this.b ?? 0);
//   },
// };
// console.log(calculator.add(5, 3));


// const watchList = [
//   {
//     Title: "Inception",
//     Year: "2010",
//     Rated: "PG-13",
//     Released: "16 Jul 2010",
//     Runtime: "148 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer: "Christopher Nolan",
//     Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     Language: "English, Japanese, French",
//     Country: "USA, UK",
//     Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.8",
//     imdbVotes: "1,446,708",
//     imdbID: "tt1375666",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Interstellar",
//     Year: "2014",
//     Rated: "PG-13",
//     Released: "07 Nov 2014",
//     Runtime: "169 min",
//     Genre: "Adventure, Drama, Sci-Fi",
//     Director: "Christopher Nolan",
//     Writer: "Jonathan Nolan, Christopher Nolan",
//     Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: "English",
//     Country: "USA, UK",
//     Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.6",
//     imdbVotes: "910,366",
//     imdbID: "tt0816692",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "The Dark Knight",
//     Year: "2008",
//     Rated: "PG-13",
//     Released: "18 Jul 2008",
//     Runtime: "152 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer:
//       "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     Language: "English, Mandarin",
//     Country: "USA, UK",
//     Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     Metascore: "82",
//     imdbRating: "9.0",
//     imdbVotes: "1,652,832",
//     imdbID: "tt0468569",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Batman Begins",
//     Year: "2005",
//     Rated: "PG-13",
//     Released: "15 Jun 2005",
//     Runtime: "140 min",
//     Genre: "Action, Adventure",
//     Director: "Christopher Nolan",
//     Writer:
//       "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     Language: "English, Urdu, Mandarin",
//     Country: "USA, UK",
//     Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     Metascore: "70",
//     imdbRating: "8.3",
//     imdbVotes: "972,584",
//     imdbID: "tt0372784",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Avatar",
//     Year: "2009",
//     Rated: "PG-13",
//     Released: "18 Dec 2009",
//     Runtime: "162 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "James Cameron",
//     Writer: "James Cameron",
//     Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     Language: "English, Spanish",
//     Country: "USA, UK",
//     Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     Metascore: "83",
//     imdbRating: "7.9",
//     imdbVotes: "876,575",
//     imdbID: "tt0499549",
//     Type: "movie",
//     Response: "True",
//   },
// ];

// const ratings = 
//   watchList.map((user) => {
//     const { Title } = user;    
//     const { imdbRating: rating } = user;
//     return { Title, rating };
//   });

// console.log(JSON.stringify(ratings));



// class Storage {
//   constructor (items) {
//   this.items = items;  
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {    
//     return this.items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     return this.items.splice(this.items.indexOf(itemToRemove), 1); 
//   }  
// }


// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); 
// storage.addItem("Droid");
// console.log(storage.getItems()); 
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); 



// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;  
//   }

//   getValue() {
//     return this.value;
//   }

//   padEnd(str) {
//     this.value = this.value + str;
//   }

//   padStart(str) {
//     this.value = str + this.value;
//   }

//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// class Student {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;  
//   }
//   change(newA) {
//   this.a = newA; 
//   }
// }

// class Pupil extends Student {
//   constructor(a, b, c) {
//     super(a, b);
//     this.c = c;  
//   }
// }
// const a = new Pupil(10, 'ok', []);
// // console.log(a);
// console.log();
// console.log(Pupil.prototype);



// class Car { 
//   static MAX_PRICE = 50000;
//   #price;

//   constructor(price) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     newPrice > Car.MAX_PRICE ? this.#price : (this.#price = newPrice);
//   }  
// }

// console.log(Car.MAX_PRICE);
// const audi = new Car( 35000 );
// console.log(audi.price); // 35000
// audi.price = 49000;
// console.log(audi.price); // 49000
// audi.price = 51000;
// console.log(audi.price); // 49000



// class Animal {
//   static planet = "Земля";

//   constructor(name, speed) {
//     this.speed = speed;
//     this.name = name;
//   }

//   run(speed = 0) {
//     this.speed += speed;
//     alert(`${this.name} біжить зі швидкістю ${this.speed}.`);
//   } 
// }

// class Rabbit extends Animal {
//   hide() {
//     alert(`${this.name} ховається!`);
//   }
// }
// let rabbits = [
//   new Rabbit("Білий Кролик", 10),
//   new Rabbit("Чорний Кролик", 5)
// ];

// console.log(Animal.prototype.__proto__ === Object.prototype);
// console.log(Rabbit.prototype.__proto__ === Animal.prototype);
// console.log(rabbits.__proto__ === Array.prototype);
// console.log(Array.prototype);
// console.log(Rabbit.prototype);


// class Rabbit { }
// console.log(Rabbit.prototype);
// console.log(Rabbit.prototype.__proto__ === Object.prototype);
// console.log(Rabbit.__proto__ === Function.prototype);



// class Blogger {
//   constructor({ name, age, numberOfPosts, topics }) {    
//     this.email = name;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new Blogger({
//   name: "gmail@gmail.com",
//   age: 24,
//   numberOfPosts: 20,
//   topics: ["tech", "cooking"],
// });

// console.log(mango.getInfo());
// mango.updatePostCount(5);
// console.log(mango.getInfo());

// const polly = new Blogger({
//   name: "ex@gmail.com",
//   age: 19,
//   numberOfPosts: 17,
//   topics: ["sports", "gaming", "health"],
// });

// console.log(polly.getInfo());
// polly.updatePostCount(5);
// console.log(polly.getInfo());


// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems () {
//     return this.items;
//   }
//   addItems (item) {
//     if (!this.items.includes(item)) {
//       this.items.push(item);
//       return this.items;
//     }
//     return `This product is already available`;
//   }
//   removeItems (item) {
//     const idx = this.items.indexOf(item);
//     if (!!~idx) {
//       this.items.splice(idx, 1);
//     }    
//     return this.items;    
//   }
// }
// const storage = new Storage(['apple', 'lemon', 'peach', 'plum']);

// console.log(storage.getItems());
// console.log(storage.addItems("banana"));
// console.log(storage.removeItems("lemon"));



// class User {
//   #login;
//   #email;
//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get name() {
//     return this.#login;
//   }

//   set name(newLogin) {
//     if (this.#login !== newLogin) {
//       this.#login = newLogin;
//     }
//   }

//   get mail() {
//     return this.#email;
//   }

//   set mail(newEmail) {
//     if (this.#email !== newEmail) {
//       this.#email = newEmail;
//     }   
//   }
// }

// const mango = new User({
//   login: 'Mango',
//   email: "gmail@gmail.com",  
// });

// console.log(mango.name);
// mango.name = "Mangodoge";
// console.log(mango.name);

// const polly = new User({
//   login: "Polly",
//   email: "polly@gmail.com",
// });

// console.log(polly.name);
// polly.name = "Pollyellow";
// console.log(polly.name);







// const str = 'hello';
// const str1 = "world";
// str[0] === str1[0] ? console.log("Yes") : console.log("No");
// console.log(str.length);
// console.log(str[str.length-1]);
//  str.length > 1 ? console.log(str[str.length - 2]) : console.log("Only one char");

// str[str.length - 1] === "o"
//   ? console.log(str[str.length - 2])
//   : console.log(str[str.length - 1]);

// for (let i = str.length-1; i >= 0; i -= 1) {
//   console.log(str[i]);
// }


// const a = -10;
// a > 0 ? console.log("a positive value") : console.log("a negative value");
// a % 2 === 0 ? console.log("an even number") : console.log("an odd number");

// const num = 8;
// const num2 = 5;
// console.log(8 % 5);
// const strNum = String(num);
// const strNum2 = String(num2);
// console.log(strNum[0]);
// console.log(strNum[strNum.length - 1]);
// console.log(Number(strNum[0]) + Number(strNum[strNum.length - 1]));
// console.log(strNum.length);
// strNum[0] === strNum2[0] ? console.log("Yes") : console.log("No");
// num % num2 === 0 ? console.log("Yes") : console.log(num % num2);

// for (let i = 1; i <= 100; i += 1) {
//   console.log(i);
// }

// for (let i = 1; i <= 100; i += 1) {
//   if (!(i % 2)) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 100; i += 1) {
//   if (!(i % 3)) {
//     console.log(i);
//   }
// }

// let total = 0;
// for (let i = 1; i <= 100; i += 1) {
//   total += i;   
// }
// console.log(total); 

// let total = 0;
// for (let i = 1; i <= 100; i += 1) {
//   if (!(i % 2)) {
//     total += i;
//   }
// }
// console.log(total); 

// let total = 0;
// for (let i = 1; i <= 100; i += 1) {
//   if (i % 2) {
//     total += i;
//   }
// }
// console.log(total); 






















// class Thermostat {
//   #fahrenheit;

//   constructor(fahrenheit) {
//     this.#fahrenheit = fahrenheit;
//   }

//   get temperature() {
//     return (5 / 9) * (this.#fahrenheit - 32);
//   }

//   set temperature(celsius) {
//     return (this.#fahrenheit = (celsius * 9.0) / 5 + 32);
//   }
// }
// // Змініть код лише над цим рядком

// const thermos = new Thermostat(76); // Налаштування у шкалі Фаренгейта
// console.log(thermos);
// let temp = thermos.temperature; // 24.44 градусів за Цельсієм
// console.log(temp);
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 градусів за Цельсієм
// console.log(temp);


// Array.prototype.myFilter = function (callback) {
//   const newArray = [];

//   for (let i = 0; i < this.length; i += 1) {
//     if (Boolean(callback(this[i], i, this)) === true) {
//       newArray.push(this[i]);
//     }
//   }  
//   return newArray;
// };
// console.log([23, 65, 98, 5, 13].myFilter((item) => item % 2));



// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAl: 'normal',
//     HIGH: 'high',  
//   }

//   constructor(items) {
//     this.item = items;    
//   }

//   addNote(note) {
//     this.item.some(({text}) => text === note.text) ?
//       console.log('This note is already exist') :
//       this.item.push(note);
//   }

//   removeNote(text) {
//     const idx = this.item.findIndex(({ text: noteText }) => noteText === text);
//     if (!!~idx)  {
//     this.item.splice(idx, 1);    
//     }
//   }

//   updateNote(text, newPriority) {
    
//     // const elem = this.item.find(({ text: note }) => text === note);
//     // if (elem) {
//     //   elem.priority = newPriority;
//     // }  
    
//     // OR  

//     const idx = this.item.findIndex(({ text: noteText }) => noteText === text);
//     if (!!~idx) {
//       this.item[idx].priority = newPriority;
//     }
//   }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: "My first note", priority: Notes.Priority.LOW });
// // console.log(myNotes.item);
// myNotes.addNote({ text: "My first note", priority: Notes.Priority.LOW });
// myNotes.addNote({ text: "My second note", priority: Notes.Priority.LOW });
// myNotes.addNote({ text: "My thirsd note", priority: Notes.Priority.LOW });
// // console.log(myNotes.item);
// myNotes.removeNote("My second note");
// // console.log(myNotes.item);
// myNotes.updateNote("My thirsd note", Notes.Priority.HIGH);
// console.log(myNotes.item);




// console.group("firstToggle");
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd("firstToggle");



// class Toggle {
//   constructor({ isOpen = false }) {    
//     this.on = isOpen;
//   }
//   toggle() {
//     this.on === true ? (this.on = false) : (this.on = true);
//   }
// }

// const firstToggle = new Toggle({ isOpen: true });
// console.group("firstToggle");
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd("firstToggle");

// const secondToggle = new Toggle({});
// console.group("secondToggle");
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd("secondToggle");



// const watchList = [
//   {
//     Title: "Inception",
//     Year: "2010",
//     Rated: "PG-13",
//     Released: "16 Jul 2010",
//     Runtime: "148 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer: "Christopher Nolan",
//     Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     Language: "English, Japanese, French",
//     Country: "USA, UK",
//     Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.8",
//     imdbVotes: "1,446,708",
//     imdbID: "tt1375666",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Interstellar",
//     Year: "2014",
//     Rated: "PG-13",
//     Released: "07 Nov 2014",
//     Runtime: "169 min",
//     Genre: "Adventure, Drama, Sci-Fi",
//     Director: "Christopher Nolan",
//     Writer: "Jonathan Nolan, Christopher Nolan",
//     Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: "English",
//     Country: "USA, UK",
//     Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.6",
//     imdbVotes: "910,366",
//     imdbID: "tt0816692",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "The Dark Knight",
//     Year: "2008",
//     Rated: "PG-13",
//     Released: "18 Jul 2008",
//     Runtime: "152 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer:
//       "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     Language: "English, Mandarin",
//     Country: "USA, UK",
//     Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     Metascore: "82",
//     imdbRating: "9.0",
//     imdbVotes: "1,652,832",
//     imdbID: "tt0468569",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Batman Begins",
//     Year: "2005",
//     Rated: "PG-13",
//     Released: "15 Jun 2005",
//     Runtime: "140 min",
//     Genre: "Action, Adventure",
//     Director: "Christopher Nolan",
//     Writer:
//       "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     Language: "English, Urdu, Mandarin",
//     Country: "USA, UK",
//     Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     Metascore: "70",
//     imdbRating: "8.3",
//     imdbVotes: "972,584",
//     imdbID: "tt0372784",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Avatar",
//     Year: "2009",
//     Rated: "PG-13",
//     Released: "18 Dec 2009",
//     Runtime: "162 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "James Cameron",
//     Writer: "James Cameron",
//     Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     Language: "English, Spanish",
//     Country: "USA, UK",
//     Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     Metascore: "83",
//     imdbRating: "7.9",
//     imdbVotes: "876,575",
//     imdbID: "tt0499549",
//     Type: "movie",
//     Response: "True",
//   },
// ];

// function getRating(watchList) {
//   // Змініть код лише під цим рядком
//  const averageRating =
//    watchList
//      .filter(({ Director: director }) => director === "Christopher Nolan")
//      .map(({ imdbRating: rating }) => Number.parseFloat(rating))
//      .reduce((acc, el) => acc + el) /
//    watchList.filter((film) => film.Director === "Christopher Nolan").length;
  
//   return averageRating;
// }
// console.log(getRating(watchList));

// OR

// function getRating(watchList) {
//   // Змініть код лише під цим рядком
//  const nolanData = watchList.reduce(
//    (acc, { Director: director, imdbRating: rating }) => {
//      if (director === "Christopher Nolan") {
//        acc.count += 1;
//        acc.sum += Number(rating);
//      }      
//      return acc;   
//    }, { count: 0, sum: 0 }
//   );  
//   const averageRating = nolanData.sum / nolanData.count;     
//   return averageRating;
// }
// console.log(getRating(watchList));


// const squareList = (arr) => {//  
//   const newArr = arr.filter((item) => Number.isInteger(item))
//     .reduce((acc, el) => {
//       if (el > 0) {
//         acc.push(el ** 2);
//       };
//     return acc
//   }, []);   
//   return newArr;//  
// };
// // const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// // console.log(squaredIntegers);
// const squaredIntegers1 = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
// console.log(squaredIntegers1);



// function sumAll([firstEl, secondEl]) {  
//   let count = 0;
//   if (firstEl < secondEl) {
//     for (let i = firstEl; i <= secondEl; i += 1) {
//       count += i;
//     }
//   } else {
//     for (let i = firstEl; i >= secondEl; i -= 1) {
//       count += i;
//     }
//   }  
//   return count;
// }
// console.log(sumAll([1, 4]));
// console.log(sumAll([4, 1]));


// function diffArray(arr1, arr2) { 
//   return [...arr1, ...arr2]
//     .filter(elem => !arr1.includes(elem) || !arr2.includes(elem));     
// }
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));


// const destroyer = (arr, ...arg) => arr.filter((elem) => !arg.includes(elem));
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));



// function whatIsInAName(collection, source) {
//   const sourceKeys = Object.keys(source);  

//   return collection.filter((obj) =>
//     sourceKeys.every(
//       (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
//     )
//   );  
// }

//   console.log(
//     whatIsInAName(
//       [
//         { first: "Romeo", last: "Montague" },
//         { first: "Mercutio", last: null },
//         { first: "Tybalt", last: "Capulet" },
//       ],
//       { last: "Capulet" }
//     )
//   );

// console.log(
//   whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
//     apple: 1,
//   })
// );

// console.log(
//   whatIsInAName(
//     [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
//     { apple: 1, bat: 2 }
//   )
// );


// function spinalCase(str) {
//   return str
//     .split(/\s|_|(?=[A-Z])/)
//     .join("-")
//     .toLowerCase();
// }

// console.log(spinalCase("This Is Spinal Tap"));
// console.log(spinalCase("The_Andy_Griffith_Show"));
// console.log(spinalCase("AllThe-small Things"));
// console.log(spinalCase("thisIsSpinalTap"));


// function translatePigLatin(str) {
//   const strArr = str.split('');  
//   const consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];   
//   const vowels = ['a', 'e', 'i', 'o', 'u'];

//   if (vowels.find((char) => char === strArr[0])) {
//     return str + "way";
//   } else if (consonant.find((char) => char === strArr[0])) {
//     if (consonant.find((char) => char === strArr[1])) {
//       return str.slice(2) + strArr.splice(0, 2).join("") + "ay";
//     }
//     return str.slice(1) + strArr.splice(0, 1).join("") + "ay";
//   }    
// }
// console.log(translatePigLatin("onsonant"));


// function myReplace(str, before, after) {     
//   if (before[0] === before[0].toUpperCase()) {
//     const afterUpper = after[0].toUpperCase() + after.slice(1);
//     return str.replace(before, afterUpper);
//   } else if (before[0] === before[0].toLowerCase()) {
//     const afterLower = after[0].toLowerCase() + after.slice(1);
//     return str.replace(before, afterLower);  
//   } 
// }
// console.log(
//   myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped")
// );



// function pairElement(str) {
//   const newStr = str.split('');
//   const dnaFirstPare = ["A", "T"];
//   const dnaSecondPare = ["C", "G"];
//   const result = []


//   newStr.map(char => {
//     if (char === dnaFirstPare[0]) {
//       result.push(dnaFirstPare);
      
//     } else if (char === dnaFirstPare[1]) {
//       const reverse1 = dnaFirstPare.slice().reverse();
//       result.push(reverse1);
    
//     } else if (char === dnaSecondPare[0]) {
//       result.push(dnaSecondPare);
      
//     } else {
//       const reverse2 = dnaSecondPare.slice().reverse();
//       result.push(reverse2);
//     } 
//   });
//   return result;
// }

// console.log(pairElement("GCG"));
// console.log(pairElement("ATCGA"));

// function pairElement(str) {
//   // create object for pair lookup
//   const pairs = {
//     A: "T",
//     T: "A",
//     C: "G",
//     G: "C",
//   };

//   // map character to array of character and matching pair
//   return str.split("").map((x) => [x, pairs[x]]);
// }
// console.log(pairElement("GCG"));
// console.log(pairElement("ATCGA"));



// function fearNotLetter(str) {
//   const main = "abcdefghijklmnopqrstuvwxyz";
//   const forCompare = main.split("").splice(main.indexOf(str[0]), str.length + 1);
  
//   if (str === main) {
//     return undefined;
//   }

//   return forCompare.reduce((acc, char) => {
//     if (!str.split("").includes(char)) {
//       acc = char;
//     }     
//     return acc;
//   }, 0); 
// }

// console.log(fearNotLetter("abce"));
// console.log(fearNotLetter("abcdefghjklmno"));
// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
// console.log(fearNotLetter("stvwx"));



// function uniteUnique(...arr) { 
//   return arr
//     .flatMap(elem => elem)
//     .filter((num, idx, array) => array.indexOf(num) === idx);  
// }
// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));


// function correct(string) {
//   const mistakes = {
//     0: "O",
//     5: "S",
//     1: "I",
//   };
//   const result = string.slice().split('');

//   return result.map((char, idx, arr) =>
//     mistakes.hasOwnProperty(char)
//       ? arr[idx].replace(char, mistakes[char])
//       : char
//   );
// }
// console.log(correct("L0ND0N"));
// console.log(correct("51NGAP0RE"));



// function areYouPlayingBanjo(name) {
//   return name[0] === "R" || name[0] === "r"
//     ? name + " plays banjo"
//     : name + " does not play banjo"; 
// }
// console.log(areYouPlayingBanjo("Adam"));
// console.log(areYouPlayingBanjo("Samantha"));
// console.log(areYouPlayingBanjo("rubi"));


// function countBy(x, n) {
//   let array = [];
//   for (let i = 1; i <= n ; i += 1) {
//     array.push(x * i);  
//   }
//   return array;
// }
// console.log(countBy(1, 10));
// console.log(countBy(2, 5));


// function removeChar(str){
//   const newStr = str.split('');
//   newStr.shift();
//   newStr.pop();
//   return newStr.join('');
// };

// function removeChar(str) {
//   return str.slice(1, -1);
// }
// console.log(removeChar("person"));


// function opposite(number) {
//  return (-number);
// }
// console.log(opposite(-33.3333));


// function numberToString(num) {
//   return num.toString(); /* String(num )*/
// }
// console.log(numberToString(67));






const article = document.querySelector(".article");
const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
   <a class="link" href="#">Read more...</a>`;

// Replace += with = operator. See the difference?
// Article title is lost because we overwrite element content.

article.innerHTML += htmlString;

console.log(article.innerHTML);