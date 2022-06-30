function multiples(){
    i=0;
  for (let i=1; i<=100;1++)
  if(i%3===0){
    console.log("fizz")
   }

   else if(i%5===0){
   console.log("buzz")

   }

   else if(i%3===0 && i%5===0){
    console.log("FizzBuzz")
   }
}

// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
var sum=0
var multiples=[]
for(x=0; x<1000;x++){
    if(x%3|| x%5==0){
        multiples.sum(x)
        sum=sum+x
    }
}
console.log(sum)


// Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// // "1 is odd"
// "2 is even"



for (let m= 0; m <= 20; m++) {
    if ([m]% 2 === 0) {
        console.log(`${m} is even`);
    }
    else{
        console.log(`${m} is odd`);
    }
}

// Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]

num = [-2,4,-5,6,0];
let largest = 0;
for (let i = 0; i < num.length; i++) {
    if (num[i] > largest) {
       biggest = num[i];
    }
}
console.log(largest);

// Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40

let num=[10,40]
if(10>40){

    console.log(10)
}
if(40>10){
    console.log(40)
}


// Write a JavaScript program to find leap years from 2000 to 2022
for(i=2000; i<=2022;i++){
    if((i%4==0 && i%100!==0) || (i%100==0 && i%400==0)){
        console.log(i," is leap year");
    }
    else{
        console.log(i,"is not leap year");
    }
}

