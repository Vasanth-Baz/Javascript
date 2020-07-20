let calculator = function(operAnd1, operAnd2){
    addition = operAnd1 + operAnd2
    subraction =  operAnd1 - operAnd2
    multiplication = operAnd1 * operAnd2
    division = operAnd1 / operAnd2
    squareroot1 = Math.sqrt(operAnd1)
    squareroot2 = Math.sqrt(operAnd2)
    percentage = (operAnd1/100)*operAnd2
    let arr = [addition, subraction, multiplication, division, squareroot1, squareroot2, percentage]
    return arr

}
let results = calculator(8,2);
let [first, second, third, fourth, fifth, sixth ,seventh] = results;
console.log(`${first} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`);