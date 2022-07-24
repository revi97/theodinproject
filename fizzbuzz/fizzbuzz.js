/*
 Need to print numbers from 1 to user entered input
 Print Fizz when a number is divisible by 3
 Print Buzz when a number is divisible by 5
 Print fizzbuzz when a number is divisible by both
*/


/*
 Get the input from the user
 Create a loop from 1 till the number given by user
 Print Fizz when a number gets divided by 3, eg: 3 will be fizz
 Print Buzz when a number gets divided by 5, eg: 5 will be buzz
 Print FizzBuzz when a number gets divided by 3 and 5, eg: 15 will be fizzbuzz
 Or else print the number as is
*/


let number = prompt("Enter a number");

for (let i=1; i<=number;i++)
{
    if(i%3 == 0 && i%5 ==0 )
    {
        console.log("Fizzbuzz");
    }
    else if(i%3 == 0)
    {
        console.log("Fizz");
    }
    else if(i%5 == 0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log(i);
    }
}