//1.Write a function to calculate sum of two numbers

function sum(a,b){
    return a+b;
 }
 console.log(sum(5,10));   //output: 15
 console.log(sum(20,4));   //output:  24





//---------------------------------------------------------------------------------
//2.Write a program to print your name 100 times.

function printName(name){
    for(i=1;i<=100;i++){
       console.log(name);
    }
}
printName("Vaishoo");





//--------------------------------------------------------------------------------------
//3.Write a program to Accept Student Roll No, Marks in 3 Subjects and print it’s Average.

function average(rollNo,subj1,subj2,subj3){
    console.log(`Roll Number: ${rollNo}, 
    Subject1: ${subj1},
    Subject2: ${subj2},
    Subject3: ${subj3}. `);

    return (subj1 + subj2 + subj3)/3;
}
console.log('Average marks of Student1 is ' + average('Mk101',60,60,60))
console.log('Average marks of Student2 is ' + average('Mk102',100,100,100))

//output: 
//         Roll Number: Mk101, 
//             Subject1: 60,
//             Subject2: 60,
//             Subject3: 60 
//         Average marks of Student1 is 60
//         Roll Number: Mk102, 
//             Subject1: 100,
//             Subject2: 100,
//             Subject3: 100 
//         Average marks of Student2 is 100






//------------------------------------------------------------------------------------
//4. Write a program to accept Three Numbers & Print the Biggest of Given Three Numbers

function largestNumber(num1,num2,num3){
    if(num1>num2 && num1> num3){
        console.log(`The Largest Number is ${num1}.`)
    } else if(num2>num1 && num2> num3){
        console.log(`The Largest Number is ${num2}.`)
    }else{
        console.log(`The Largest Number is ${num3}.`)
    }
}
largestNumber(1,2,3);        //output: The Largest Number is 3
largestNumber(1000,200,500); //output: The Largest Number is 1000
largestNumber(84,12,67);     //output: The Largest Number is 84





 //---------------------------------------------------------------------------------
//5.  Write a program to swap two numbers using a third variable called temp.

function swap(a=5,b=9){
    console.log(`Value of a & b before swap is ${a} and ${b}.`);
     let temp=a; //temp=5
      a=b;       //a=9
      b=temp;    //b=5
     console.log(`Value of a & b after swap is ${a} and ${b}.`);
}
swap();

//output:
// Value of a & b before swap is 5 and 9.
// Value of a & b after swap is 9 and 5.





//---------------------------------------------------------------------------------
//6. Write a program to print ODD numbers from 1 to 10.

function oddNumbers(){
    for(i=1;i<=10;i++){
        if(i%2 !== 0){
            console.log(i)
        }
    }
}
oddNumbers();

//output:
1
3
5
7
9





 //---------------------------------------------------------------------------------
//7. Write a program to print natural numbers from 1 to 10 in Reverse.

function reverse(){
    for(i=10;i>=1;i--){
        console.log(i)
    }
}
reverse();

//output:
10
9
8
7
6
5
4
3
2
1






//---------------------------------------------------------------------------------
//8.  Write a program to accept a string in any case and print it by another case

function changeCase(text){
    if(text==text.toLowerCase()){
        console.log(text.toUpperCase());
    }else{
        console.log(text.toLowerCase());
    }
}
changeCase('hello');   //output: HELLO
changeCase('WELCOME');  //output: welcome





//----------------------------------------------------------------------------------------
//9. Write a program to check whether a given number is perfect square or not.

function perfectSquare(num){
    if(num<=0){
        console.log("Negative numbers cannot have perfect squares.")
    }

    let squareRoot=Math.sqrt(num);
    if(squareRoot % 1 == 0){
        console.log(`Yes, ${num} is a perfect square.`)
    }else{
        console.log(`No, ${num} is not a perfect square.`)
    }
}
perfectSquare(25);  //output: Yes, 25 is a perfect square.
perfectSquare(26);  //output: No, 26 is not a perfect square.






//---------------------------------------------------------------------------------
//10. Write a program to print table of any number.

function multiplicationTable(num){
    for(i=1;i<=10;i++){
        let ans=num*i
        console.log(`${num}*${i} = ${ans}`)
    }
}
multiplicationTable(9);

//output:
// 9*1 = 9
// 9*2 = 18
// 9*3 = 27
// 9*4 = 36
// 9*5 = 45
// 9*6 = 54
// 9*7 = 63
// 9*8 = 72
// 9*9 = 81
// 9*10 = 90






//----------------------------------------------------------------------------------
// 11.Write a program to accept a string in upper case and print it by lower case.

function upperToLowerCase(text){
    console.log(text.toLowerCase())
}
upperToLowerCase('WELCOME TO MENTORKART')

//output:  
// welcome to mentorkart






//--------------------------------------------------------------------------------------
// 12.Write a program to accept any single digit number and print it in words.

function digitToWord(num){
    switch(num){
        case 0:
        console.log("Zero");
        break;
        case 1:
        console.log("One");
        break;
        case 2:
        console.log("Two");
        break;
        case 3:
        console.log("Three");
        break;
        case 4:
        console.log("Four");
        break;
        case 5:
        console.log("Five");
        break;
        case 6:
        console.log("Six");
        break;
        case 7:
        console.log("Seven");
        break;
        case 8:
        console.log("Eight");
        break;
        case 9:
        console.log("Nine");
        break;
        default:
            console.log("Please type a number between 0 to 9");
            break;
    }
}
digitToWord(5)  //output: Five
digitToWord(8)  //output: Eight
digitToWord(25)  //output: Please type a number between 0 to 9






//--------------------------------------------------------------------------------------
// 13. Write a program to reverse a number

function reverseNumber(num){
    let reverse=num.toString().split('').reverse().join('');
    console.log(reverse);
}
reverseNumber(125);  //output: 521
reverseNumber(2009); //output: 9002






//---------------------------------------------------------------------------------------
// 14. Write a program to find largest number of a list of numbers

function largestNumInList(arr){
    let maxNumber=Math.max(...arr);
    console.log(`The largest number in the array [${arr}] is ${maxNumber}.`)
}
largestNumInList([1,2,3,4,5,6,7,8])
largestNumInList([50,85,33,2,93,49])

//output:

// The largest number in the array [1,2,3,4,5,6,7,8] is 8.
// The largest number in the array [50,85,33,2,93,49] is 93.





//------------------------------------------------------------------------------------------
// 15. Write a program to calculate and print the sum of even and odd integers of the first n natural numbers.

function evenAndOddSum(num){
    let evenNum=[];
    let oddNum=[];
    for(i=1;i<=num;i++){
        if(i%2==0){
            evenNum.push(i);
        }else{
            oddNum.push(i);
        }
    }
    console.log('Even numbers in the given range are ' +evenNum);
    console.log('Odd numbers in the given range are ' +oddNum);

    let evenSum= evenNum.reduce((sum,num)=>sum+num,0);
    let oddSum= oddNum.reduce((sum,num)=>sum+num,0);
    console.log(`The sum of even numbers is ${evenSum}.`);
    console.log(`The sum of odd numbers is ${oddSum}.`);
}
evenAndOddSum(10);


//output:
//       Even numbers in the given range are 2,4,6,8,10
//       Odd numbers in the given range are 1,3,5,7,9
//       The sum of even numbers is 30.
//       The sum of odd numbers is 25.





//--------------------------------------------------------------------------------------
//16. Write a program to find the area of a triangle when three sides are given.

function areaOfTriangle(side1,side2,side3){
    let s=(side1+side2+side3)/2;
    let area=Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
    console.log(`Area of the triangle is ${area} square units.`);
}
areaOfTriangle(3,4,5)   //output:Area of the triangle is 6 square units.
areaOfTriangle(12,16,20)  //output: Area of the triangle is 96 square units.





//--------------------------------------------------------------------------------------
//17. Write a program to check whether a number is prime number or not.

function primeOrNot(number){
    let isPrime=true;
    if(number===1){
        console.log("1 is neither prime or composite")
    }else if(number>1){
        for(let i=2;i<number;i++){
            if(number%i==0){
                isPrime=false;
                break;
            }
        }
        if(isPrime){
            console.log(`${number} is a prime number`)
        } else {
            console.log(`${number} is a not prime number`);
        }
    }else{
        console.log(`Numbers less than 1 cannot be a prime number.`);
    }
}
primeOrNot(11);
primeOrNot(73);
primeOrNot(4);
primeOrNot(1);

//output:
// 11 is a prime number
// 73 is a prime number
// 4 is a not prime number
// 1 is neither prime or composite






//-------------------------------------------------------------------------------------
//18. Write a program to find sum of series 1 + 2 + 3 +......+ n for any given n.

function sumSeries(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    console.log(`The sum of series 1 + 2 + 3 +......+ ${num} is: ${sum}`);
  }
  sumSeries(10);
  sumSeries(11);
  sumSeries(100);
  
  //output: 
  // The sum of series 1 + 2 + 3 +......+ 10 is: 55
  // The sum of series 1 + 2 + 3 +......+ 11 is: 66
  // The sum of series 1 + 2 + 3 +......+ 100 is: 5050
  
  




//-------------------------------------------------------------------------------------
//19. Write a program to find the sum of series 1^2+3^2+5^2+......+n^2 for any given n.

function sumOfSeries(n)
{
    let sum=(n * (2*n-1) * (2*n+1)) / 3;
    console.log(`The sum of series 1^2+3^2+5^2+......+${n}^2 is: ${sum}`)
}
sumOfSeries(10)

//output:
// The sum of series 1^2+3^2+5^2+......+10^2 is: 1330






//--------------------------------------------------------------------------------------
//20. Write a program to print given series:1 2 4 8 16 32 64 128 for any given n; n being count of numbers in series.

function printSeries(num){
    for(i=1;i<=num;i*=2){
        console.log(i)
    }
}
printSeries(100);
printSeries(500);


//output: 
1
2
4
8
16
32
64

//output:
1
2
4
8
16
32
64
128
256







//-----------------------------------------------------------------------------------------
//21. Write a program to swap two numbers without using a third variable

function swapDirectly(num1=2,num2=8){
    console.log(`Before swap num1: ${num1}`);
    console.log(`Before swap num2: ${num2}`);
    [num1, num2] =[num2,num1];
    console.log(`After swap num1: ${num1}`);
    console.log(`After swap num2: ${num2}`);
}
swapDirectly();

//output: 
// Before swap num1: 2
// Before swap num2: 8
// After swap num1: 8
// After swap num2: 2






//-----------------------------------------------------------------------------------------
//22. Write a program to perform all arithmetic calculations (=, -, *, /) using switch case.

function performArithmeticCal(num1,num2,operation){
    switch(operation){
        case '+':
            console.log(`Sum: ${num1+num2}`);
            break;
        case '-':
            console.log(`Difference: ${num1-num2}`);
            break;
        case '*':
            console.log(`Multiplication: ${num1*num2}`);
            break;
        case '/':
            console.log(`Division: ${num1/num2}`);
            break;
    }
}
performArithmeticCal(10,5,'+');
performArithmeticCal(10,5,'-');
performArithmeticCal(10,5,'*');
performArithmeticCal(10,5,'/');

//output:
// Sum: 15
// Difference: 5
// Multiplication: 50
// Division: 2






//---------------------------------------------------------------------------------------
//23. Write a program to find the sum of individual digits of a positive integer.

function sumDigits(n){
    let numArr = n.toString().split("");

    let sum = numArr.reduce(function(a, b){
        return parseInt(a) + parseInt(b);
    }, 0);
    
    return sum;
}
console.log(sumDigits(255));    //output:12
console.log(sumDigits(45132));   //output:15






//-----------------------------------------------------------------------------------------
//24. Write a program to the number count of letters in a given text.

function lettersCount(text){
    let letters=text.split(' ').join('')
    return letters.length
}
console.log(lettersCount('Hi Hey Hello'))  //output:10







//------------------------------------------------------------------------------------------
//25. Write a program to generate square root of 1 to 10

function squareRoots(num){
    return Math.sqrt(num)
}
console.log(squareRoots(1))  //output:1
console.log(squareRoots(5))  //output:2.23606797749979
console.log(squareRoots(10))  //output:3.1622776601683795

