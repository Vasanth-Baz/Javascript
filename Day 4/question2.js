console.log('question2');

let student = {
    name: 'Helsinki',
    age: 24,
    projects: 
    {
        diceGame: "Two player dice game usig Javascript"
    }
}

const {name,age,projects: {diceGame}} = student;
console.log(name,age,diceGame);