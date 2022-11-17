// I put the code in a function, it allows to modify the limit if needed
// The loop will stop at 200 and display in console.log the numbers when fizz, buzz and fizzBuzz are not displayed.
function fizzBuzz(n) {
    for (var i = 1; i < n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            // Or (i % 15 ==0) but I found this solution less visually understandable
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(200);
