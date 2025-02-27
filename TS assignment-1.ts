ex 1

let stringarray:string[]=["apple","banana","cherry"];
console.log(stringarray);
let numberarray:number[]=[1,2,3,4,5];
console.log(numberarray);
let booleanarray:boolean[]=[true,false,true];
console.log(booleanarray);


ex 2

let fruits:string[]=["apple","banana","mango"];
fruits.push("grapes");
fruits.shift();
fruits.splice(2,0,"pineapple");
fruits.reverse();
console.log(fruits);
 ex 3 

let numbers:number[]=[10,20,30,40,50,60];
let doublednumbers=numbers.map(num=>num*2);
console.log("Doubled numbers:",doublednumbers);
let filterednumbers=numbers.filter(num=>num>=50);
console.log("Filtered numbers:",filterednumbers);
let sum=numbers.reduce((acc,num)=>acc+num,0);
console.log("Sum:",sum)

ex 4

let newdays=days.slice(1,3);
console.log(newdays);
let nums:number[]=[1,2,3,4,5,6,7,8,9,10];
let sq=Vals.map(=>i*i);
console.log(sq);


ex 5

let numbers:number[]=[55,23,87,12,99,38];
let asc=numbers.slice().sort((a,b)=>a-b);
console.log("Ascending order:",asc);
let desc=numbers.slice().sort((a,b)=>b-a);
console.log("Descending order:",desc);


ex 6

let values:number[]=[10,20,30,40,50];
let result=values.find(num=>num>25);
console.log("Greater than 25= ",result);
let index=values.findIndex(num=>num===40);
console.log("index value of 40 is ",index);



ex 7

let roles:string[]=["user","Editor","Admin","moderator"];
let admin=roles.includes("Admin");
let role=roles.some(role=>role.startsWith("Super"));
console.log("Contains admin:",admin);
console.log("has super role:",role);


ex 8

let nestedArray:(number|number[])[]=[1,[2,3],[4,[5,6]]];
let flattenedArray=nestedArray.flat(2);
console.log(flattenedArray);



ex9

let arr1:number[]=[1,2,3,4];
let arr2:number[]=[3,4,5,6];
let uniqueArray=Array.from(new Set(arr1.concat(arr2)));
console.log(uniqueArray);

ex 10
interface emp{
    name:string;
    age:number;
    position:number;
}
let employees=emp[]=[
    {name:"sree",age:21,position:"Developer"},
    {name:"iyni",age:22,position:"tester"},
    {name:"ivaan",age:32,position:"team lead"}

];
let filteredemp=emp[]=employees.filter(emp=>emp.age>30);
console.log(filteredEmployees);






