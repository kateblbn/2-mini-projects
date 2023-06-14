const middle = document.querySelector('.middle');

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name:'Mary', age: 31, voted: false},
    {name:'Becky', age: 43, voted: false},
    {name:'Joey', age: 41, voted: true},
    {name:'Jeff', age: 30, voted: true},
    {name:'Zack', age: 19, voted: false}
  ];


function getAverageAge() {
    const result = Math.round( voters.reduce( (revious, current) =>   revious  + current.age , 0) / voters.length );
    console.log(result);
}
getAverageAge();

function getAgeWithVotedTrue() {
    const trueResult = voters.filter( elem => elem.voted == true)
    let res = Math.round( trueResult.reduce( (show, calc) => show + calc.age , 0) / trueResult.length);
    }
    getAgeWithVotedTrue();
    
function getAgeWithVotedfalse() {
let falseResult = voters.filter( elem => elem.voted == false);
let result = Math.round( falseResult.reduce( (show, calc) =>  show + calc.age  , 0)/ falseResult.length);
}
getAgeWithVotedfalse();
