
let person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: null   //Object, yes the same variable/object defined after
};

let person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

person.significant_other = person2;

let family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};


const addAllFamilyLuckyNumbers = (anArray) => {
  let sumOfAllLuckyNumbers = 0;//sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.


  sumOfAllLuckyNumbers = anArray.map(( member) => {
    return member.lucky_numbers.reduce((a,b) => a+b, 0);
  }).reduce((a,b) => a+b, 0);

  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers
  
  return sumOfAllLuckyNumbers;
}


//Enter all your code here:
//Programmatically, change the fourth lucky number of John Doe to 33 (use a command, don't manually change the code)
family.members[0].lucky_numbers[3] = 33;

//Programmatically, create a new person and add it to the family object. Jimmy Doe, 13, male, lucky numbers: 1, 2, 3, 4; significant other: null. (use a command, don't manually change the code)

let person3 = {
  name: "Jimmy",
  lastname: "Doe",
  age: 13,
  lucky_numbers: [ 1, 2, 3, 4],
  significant_other: null
}

family.members.push(person3);

//Now please print ( console.log() ) the SUM of all of the lucky numbers of the Doe family.
//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 