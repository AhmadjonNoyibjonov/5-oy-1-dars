//// Massivlarga oid masalalar
// 1-masala
// 1-usul
// function mapFilterToUse(arg) {
//     let res;
//     res = arg.filter(function(value) {
//         return value.length >= 5;
//     })

//     res = res.map(function(value) {
//         return value.toUpperCase()
//     })

//     return res;
// }
// console.log(mapFilterToUse(["salom","bye","world","good","funksiya"]));

// 2-usul
//  const mapFilterToUse = function (arg) {
//     let res;
//     res = arg.filter(function(value) {
//         return value.length >= 5;
//     })

//     res = res.map(function(value) {
//         return value.toUpperCase()
//     })

//     return res;
// }
// console.log(mapFilterToUse(["salom","bye","world","good","funksiya"]));

// 3-usul
//  const mapFilterToUse = (arg) => {
//     let res;
//     res = arg.filter(function(value) {
//         return value.length >= 5;
//     })

//     res = res.map(function(value) {
//         return value.toUpperCase()
//     })

//     return res;
// }
// console.log(mapFilterToUse(["salom","bye","world","good","funksiya"]));

// 2-masala
// 1-usul
// function findMaptouse(arg) {
//   let A ;
//   arg.find(function (value) {
//     A = value.name
//     return value.age > 20;
//   });

//   A = A.toUpperCase();
//   return A;
// }
// console.log(findMaptouse([
//     {name:"Abror",age:17},
//     {name:"Ahror",age:20},
//     {name:"Akmal",age:15},
//     {name:"Bobur",age:21}
// ]));

// 2-usul
// const findMaptouse =  function (arg) {
//     let A ;
//     arg.find(function (value) {
//       A = value.name
//       return value.age > 20;
//     });

//     A = A.toUpperCase();
//     return A;
//   }
//   console.log(findMaptouse([
//       {name:"Abror",age:17},
//       {name:"Ahror",age:20},
//       {name:"Akmal",age:15},
//       {name:"Bobur",age:21}
//   ]));

// 3-usul
// const findMaptouse = (arg) => {
//     let A ;
//     arg.find(function (value) {
//       A = value.name
//       return value.age > 20;
//     });

//     A = A.toUpperCase();
//     return A;
//   }
//   console.log(findMaptouse([
//       {name:"Abror",age:17},
//       {name:"Ahror",age:20},
//       {name:"Akmal",age:15},
//       {name:"Bobur",age:21}
//   ]));

// 3-masala
// 1-usul
// function filterreducetouse(arg) {
//   let res;
//   res = arg.filter(function (value) {
//     return value.price > 100;
//   });

//   res = res.map(function (value) {
//     return value.price;
//   });

//   let result = 0;
//    res.forEach(function(value) {
//     result += value
//   })

//   return result;
// }
// console.log(
//   filterreducetouse([
//     { name: "apple", price: 95 },
//     { name: "orange", price: 150 },
//     { name: "banan", price: 130 },
//     { name: "peach", price: 105 },
//     { name: "apricot", price: 85 },
//   ])
// );

// 2-usul
// const filterreducetouse = function(arg) {
//     let res;
//     res = arg.filter(function (value) {
//       return value.price > 100;
//     });

//     res = res.map(function (value) {
//       return value.price;
//     });

//     let result = 0;
//      res.forEach(function(value) {
//       result += value
//     })

//     return result;
//   }
//   console.log(
//     filterreducetouse([
//       { name: "apple", price: 95 },
//       { name: "orange", price: 150 },
//       { name: "banan", price: 130 },
//       { name: "peach", price: 105 },
//       { name: "apricot", price: 85 },
//     ])
//   );

// 3-usul
// const filterreducetouse = (arg) => {
//     let res;
//     res = arg.filter(function (value) {
//       return value.price > 100;
//     });

//     res = res.map(function (value) {
//       return value.price;
//     });

//     let result = 0;
//      res.forEach(function(value) {
//       result += value
//     })

//     return result;
//   }
//   console.log(
//     filterreducetouse([
//       { name: "apple", price: 95 },
//       { name: "orange", price: 150 },
//       { name: "banan", price: 130 },
//       { name: "peach", price: 105 },
//       { name: "apricot", price: 85 },
//     ])
//   );

// 4-masala
// 1-usul
// function someEverytouce(arg) {
//     let res;
//     res = arg.every(function(value) {
//         return value > 0;
//     })

//     let A = arg.some(function(value) {
//         return value > 100;
//     })

//     let result = `${res}, ${A}`

//     return result;
// }
// console.log(someEverytouce([2,5,8,12,29,46,78,100,10]));

// 2-usul
// const someEverytouce = function(arg) {
//     let res;
//     res = arg.every(function(value) {
//         return value > 0;
//     })

//     let A = arg.some(function(value) {
//         return value > 100;
//     })

//     let result = `${res}, ${A}`

//     return result;
// }
// console.log(someEverytouce([2,5,8,12,29,46,78,100,10]));

// 3-usul
// const someEverytouce = (arg) => {
//     let res;
//     res = arg.every(function(value) {
//         return value > 0;
//     })

//     let A = arg.some(function(value) {
//         return value > 100;
//     })

//     let result = `${res}, ${A}`

//     return result;
// }
// console.log(someEverytouce([2,5,8,12,29,46,78,100,10]));

// 5-masala
// 1-usul
// function mapforEachtouce(arg) {
//     let res;
//     res = arg.map(function(value) {
//         return value ** 2;
//     })

//     res.forEach(function(value) {
//         console.log(value);
//     })

//     return res;
// }

// mapforEachtouce([2,3,5,8,12,29])

// 2-usul
// const mapforEachtouce = function(arg) {
//     let res;
//     res = arg.map(function(value) {
//         return value ** 2;
//     })

//     res.forEach(function(value) {
//         console.log(value);
//     })

//     return res;
// }

// mapforEachtouce([2,3,5,8,12,29])

// 3-usul
// const mapFilterToUse = (arg) => {
//     let res;
//     res = arg.map(function(value) {
//         return value ** 2;
//     })

//     res.forEach(function(value) {
//         console.log(value);
//     })

//     return res;
// }

// mapforEachtouce([2,3,5,8,12,29])

// 6-masala
// 1-usul
// function mapfilterreducetouce(arg) {
//     let res;
//     res = arg.filter(function(value) {
//         return value < 2000;
//     })

//     let A = res.map(function(value) {
//         return value = value + (value*10)/100
//     })

//     return A;
// }
// console.log(mapfilterreducetouce([1200,2000,2010,2500,1500,1900,1700]));

// 2-usul
// const mapfilterreducetouce = function(arg) {
//     let res;
//     res = arg.filter(function(value) {
//         return value < 2000;
//     })

//     let A = res.map(function(value) {
//         return value = value + (value*10)/100
//     })

//     return A;
// }
// console.log(mapfilterreducetouce([1200,2000,2010,2500,1500,1900,1700]));

// 3-usul
// const mapfilterreducetouce = (arg) => {
//     let res;
//     res = arg.filter(function(value) {
//         return value < 2000;
//     })

//     let A = res.map(function(value) {
//         return value = value + (value*10)/100
//     })

//     return A;
// }
// console.log(mapfilterreducetouce([1200,2000,2010,2500,1500,1900,1700]));

// 7-masala
// 1-usul
// function mapfilterfindtouce(arg) {
//     let res;
//     let n = arg.find(function(value) {
//         return value.ball > 80
//     })

//     let A = `${n.name} , ${n.age}`

//     res = arg.filter(function(value) {
//         return value.ball > 80;
//     })

//     res.forEach(function(value) {
//         console.log(value.name.toUpperCase());
//     })

//     return A ;
// }
// console.log(mapfilterfindtouce([
//     {name:"Ali",age:19,ball:85},
//     {name:"Vali",age:20,ball:75},
//     {name:"Qobil",age:18,ball:95},
//     {name:"Sherzod",age:19,ball:80},
//     {name:"Umid",age:21,ball:70},
//     {name:"Ilhom",age:26,ball:84}
// ]));

// 2-usul
// const mapfilterfindtouce = function(arg) {
//     let res;
//     let n = arg.find(function(value) {
//         return value.ball > 80
//     })

//     let A = `${n.name} , ${n.age}`

//     res = arg.filter(function(value) {
//         return value.ball > 80;
//     })

//     res.forEach(function(value) {
//         console.log(value.name.toUpperCase());
//     })

//     return A ;
// }
// console.log(mapfilterfindtouce([
//     {name:"Ali",age:19,ball:85},
//     {name:"Vali",age:20,ball:75},
//     {name:"Qobil",age:18,ball:95},
//     {name:"Sherzod",age:19,ball:80},
//     {name:"Umid",age:21,ball:70},
//     {name:"Ilhom",age:26,ball:84}
// ]));

// 3-usul
// const mapfilterfindtouce = (arg) =>{
//     let res;
//     let n = arg.find(function(value) {
//         return value.ball > 80
//     })

//     let A = `${n.name} , ${n.age}`

//     res = arg.filter(function(value) {
//         return value.ball > 80;
//     })

//     res.forEach(function(value) {
//         console.log(value.name.toUpperCase());
//     })

//     return A ;
// }
// console.log(mapfilterfindtouce([
//     {name:"Ali",age:19,ball:85},
//     {name:"Vali",age:20,ball:75},
//     {name:"Qobil",age:18,ball:95},
//     {name:"Sherzod",age:19,ball:80},
//     {name:"Umid",age:21,ball:70},
//     {name:"Ilhom",age:26,ball:84}
// ]));

// Yozuvlarga oid.
// 1-masala
// 1-usul
// function tuppercasestring(arg) {
//   let res;
//   res = arg.toUpperCase();

//   return res;
// }
// console.log(tuppercasestring("hello children"));

// 2-usul
// const tuppercasestring = function(arg) {
//   let res;
//   res = arg.toUpperCase();

//   return res;
// }
// console.log(tuppercasestring("hello children"));

// 3-usul
// const tuppercasestring = (arg) => {
//     let res;
//     res = arg.toUpperCase();

//     return res;
//   }
//   console.log(tuppercasestring("hello children"));

// 2-masala
// 1- usul
// function includescheck(arg) {
//     let res;
//     res = arg.includes("substring")

//     return res;
// }
// console.log(includescheck("substring mainstring substr upperstring"));

// 2-usul
// const includescheck = function(arg) {
//     let res;
//     res = arg.includes("substring")

//     return res;
// }
// console.log(includescheck("substring mainstring substr upperstring"));

// 3-usul
// const includescheck =  (arg) => {
//     let res;
//     res = arg.includes("substring")

//     return res;
// }
// console.log(includescheck("substring mainstring substr upperstring"));

// 3-masala
// 1-usul
// function JavaScriptreplasetoJS(arg) {
//   let res;
//     res = arg.replaceAll("JavaScript","JS")
//   return res;
// }
// console.log(JavaScriptreplasetoJS("JavaScript Lorem ipsum dolor JavaScript sit amet, consectetur JavaScript adipisicing elit JavaScript"));

// 2-usul
// const JavaScriptreplasetoJS = function(arg) {
//     let res;
//       res = arg.replaceAll("JavaScript","JS")
//     return res;
//   }
//   console.log(JavaScriptreplasetoJS("JavaScript Lorem ipsum dolor JavaScript sit amet, consectetur JavaScript adipisicing elit JavaScript"));

// 3-usul
// const JavaScriptreplasetoJS =  (arg) => {
//     let res;
//       res = arg.replaceAll("JavaScript","JS")
//     return res;
//   }
//   console.log(JavaScriptreplasetoJS("JavaScript Lorem ipsum dolor JavaScript sit amet, consectetur JavaScript adipisicing elit JavaScript"));

// 4-masala
// 1-usul
// function splitjoincheck(arg) {
//     let res;
//     res = arg.split("");
//     res = res.reverse();
//     res = res.join("");

//     return res;
// }
// console.log(splitjoincheck("Uzbekistan"));

// 2-usul
// const splitjoincheck = function(arg) {
//     let res;
//     res = arg.split("");
//     res = res.reverse();
//     res = res.join("");

//     return res;
// }
// console.log(splitjoincheck("Uzbekistan"));

// 3-usul
// const splitjoincheck =  (arg) => {
//     let res;
//     res = arg.split("");
//     res = res.reverse();
//     res = res.join("");

//     return res;
// }
// console.log(splitjoincheck("Uzbekistan"));

// 5-masala
// 1-usul
// function trimcheck(arg) {
//     let res;
//     res = arg.trim()

//     return res;
// }
// console.log(trimcheck("    hello    uzbekistan        "));


// 2-usul
// const trimcheck = function(arg) {
//     let res;
//     res = arg.trim()

//     return res;
// }
// console.log(trimcheck("    hello    uzbekistan        "));


// 3-usul
// const trimcheck =  (arg) => {
//     let res;
//     res = arg.trim()

//     return res;
// }
// console.log(trimcheck("    hello    uzbekistan        "));