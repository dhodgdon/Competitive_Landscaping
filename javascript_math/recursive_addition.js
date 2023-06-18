// This creates an array from 1-5.
const nums = Array.from(Array(5).keys()).map(num => num + 1)

function recursive_add(numbers) {
    if (numbers.length == 1) {
        return numbers.at(0)
    }
    else {
        return numbers.at(0) + recursive_add(numbers.slice(1))
    }
}

// Sum all the numbers in our array.
console.log("Sum of numbers", nums.at(0), "-", nums.at(-1), ":", recursive_add(nums))

// Filter our list to include only the even numbers.
const even_nums = nums.filter(num => num % 2 == 0)

// Filter our list to include only the odd numbers.
const odd_nums = nums.filter(num => num % 2 == 1)

// Display the sums of our new arrays.
console.log("Just the even numbers :", recursive_add(even_nums))
console.log("Just the odd numbers :", recursive_add(odd_nums))



// def fibonacci(n):
//     if n == 0:
//         return 0
//     elif n == 1:
//         return 1
//     else:
//         return fibonacci(n-1) + fibonacci(n-2)

// def recursive_addition(x, y):
//     if y == 0:
//         return x
//     return recursive_addition(x+1, y-1)


// def recursive_add(numbers):
//     if len(numbers) == 1:
//         return numbers[0]
//     else:
//         return numbers[0] + recursive_add(numbers[1:])