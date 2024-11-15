const numbers=[2,4,6,7,8,9]
const doubled=numbers.map(num=>num*2)
console.log(doubled)
///
const num=numbers.filter(num=>num%2==0)
console.log(num)
///
const n=numbers.reduce((accumulator,currentValue)=>accumulator+currentValue)
console.log(n)