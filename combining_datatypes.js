// Create an object, called crayonBox, that has a property that is an array.
// The array should have the names of some crayons. Log one of the elements of that array.
const crayonBox = {
    colors: ['green', 'blue', 'red', 'yellow']
};
console.log(crayonBox.colors[0]);

// Create an object bottle that has a property that is an object: cap.
// cap can have properties like material: 'metal' or 'plastic', color: blue or white etc.
// Log one of the properties of that inner object.
const bottle = {
    cap: {
        material: 'plastic',
        color: 'blue'
    }
};
console.log(bottle.cap.color);

// Create an array called receipt that has at least one object in it.
// The inner objects should be items that have a name and a price.
// Log one of the properties of that inner object.
const receipt = [
    {
        item: 'Notebook',
        price: 2
    }
];
console.log(receipt[0].item);

// Create an array called apartmentBuilding that has an array as one of its elements,
// the inner array should be the names of the tenants.
// Log one of the elements of the inner array.
const apartmentBuilding = [
    {
        tenants: ['Eric', 'Andrea', 'Alo']
    }
];
console.log(apartmentBuilding[0].tenants[1]);

// Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc.
// Log a value of that object (hint: call the function and then call a property on the return value).
function knit() {
    return {
        item: 'scarf',
        size: '6ft'
    };
}
const knittedItem = knit();
    console.log(knittedItem.size);

// Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object).
// Log one of the elements of that array.
function crayonSelector() {
    return {
        colors: ['green', 'blue', 'red', 'yellow']
    };
}
const selectedCrayon = crayonSelector();
console.log(selectedCrayon.colors[0]);

// Create a function powerButton that returns a function called options - options should console.log a simple message like select a song.
// Call that inner function
function powerButton() {
    return {
        options: function () {
            console.log('select a song.');
        }
    }
}
const buttonOptions = powerButton().options();

//Model a Vending Machine Model a vending machine

//a vending machine is an object
//it has an array of snacks (make 3 snacks)
//snacks are objects that have a name and a price
//a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
//Be able to call vendingMachine.vend() with a valid integer to return a snack
const vendingMachine = {
    snacks: [
        {name: 'chips', price: 1},
        {name: 'candy', price: 2},
        {NAME: 'soda', price: 3}
    ],
    vend: function(position) {
        if (position >= 0 && position < this.snacks.length) {
            return this.snacks[position];
        } else {
            return 'Invalid snack position';
        }
    }
};
const selectedSnack = vendingMachine.vend(1);
console.log(selectedSnack);


// Make a function add that takes two arguments (numbers) and sums them together
const add = (num1, num2) => num1 + num2

// Make a function subtract that takes two arguments (numbers) and subtracts them
const subtract = (num1, num2) => num1 - num2

// Make a function multiply that takes two arguments and multiplies them
const multiply = (num1, num2) => num1 * num2

// Make a function divide that takes two arguments and divides them
const divide = (num1, num2) => (num2 !== 0 ? num1 / num2 : 'Cannot divide by zero');

// Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
const calculate = (num1, num2, operates) => operates(num1, num2)

// Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
// i'm not sure how to do this one.

// Call calculate 4 times, each time using one of the operation functions you wrote
const sumResult = calculate(10, 5, add);
console.log('Sum:', sumResult);

const differenceResult = calculate(10, 5, multiply);
console.log('Difference:', differenceResult);

const productResult = calculate(10, 5, multiply);
console.log('Product:', productResult);

const quotientResult = calculate(10, 5, divide);
console.log('Quotient:', quotientResult);


// Clean up this code, so that it works and has function definitions in the correct place
const bar = () => {
    console.log('bar here');
}

const foo = () => {
    console.log('foo here');
}

// What is meant by the error(s) this produces?
// Change 'const foo =>' to 'const foo = () =>'

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

// Every
const everyNumNonNegative = nums.every(num => num >= 0);
console.log('Every number is greater than or equal to 0:', everyNumNonNegative);

const everyWordShorterThan8 = panagram.every(word => word.length < 8);
console.log('Every word is shorter than 8 characters:', everyWordShorterThan8);

// Filter
const numsLessThan4 = nums.filter(num => num < 4);
console.log('Numbers less than 4:', numsLessThan4);

const wordsEvenLength = panagram.filter(word => word.length % 2 === 0);
console.log('Words with an even length:', wordsEvenLength);

// Find
const firstDivisibleBy5 = nums.find(num => num % 5 === 0);
console.log('First number divisible by 5:', firstDivisibleBy5);

const firstWordLongerThan5 = panagram.find(word => word.length > 5);
console.log('First word longer than 5 characters:', firstWordLongerThan5);

// Find Index
const indexFirstDivisibleBy3 = nums.findIndex(num => num % 3 === 0);
console.log('Index of first number divisible by 3:', indexFirstDivisibleBy3);

const indexFirstWordLessThan2 = panagram.findIndex(word => word.length < 2);
console.log('Index of first word less than 2 characters long:', indexFirstWordLessThan2);

// For Each
nums.forEach(num => console.log(num * 3));

panagram.forEach(word => console.log(word + '!'));

// Map
const numsMultipliedBy100 = nums.map(num => num * 100);
console.log('New array of each number multiplied by 100:', numsMultipliedBy100);

const wordsAllUppercase = panagram.map(word => word.toUpperCase());
console.log('New array of all words in uppercase:', wordsAllUppercase);

// Some
const someNumsDivisibleBy7 = nums.some(num => num % 7 === 0);
console.log('Some numbers are divisible by 7:', someNumsDivisibleBy7);

const someWordsHaveA = panagram.some(word => word.includes('a'));
console.log('Some words have the letter "a":', someWordsHaveA);