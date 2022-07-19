let counter = 1; 
while (counter <= 1000) {
 
  console.log(counter);
  counter++; 
}

console.log("hello"); 

let person = {
  
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female",
};


const objectKeysForFunction = () => {
 
  console.log(Object.keys(person)); 
};
objectKeysForFunction();


const objectEntriesForFunction = () => {
 
  console.log(Object.entries(person)); 
};
objectEntriesForFunction(); 


let arrayOfPersons = [
  {
  
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "march 5, 2006",
    gender: "female",
  },
  {
   
    firstName: "john",
    lastName: "lane",
    birthDate: "january 7, 1974",
    gender: "male",
  },
  {
   
    firstName: "bill",
    lastName: "burr",
    birthDate: "may 12, 1988",
    gender: "male",
  },
  {
   
    firstName: "noah",
    lastName: "reese",
    birthDate: "december 25, 2001",
    gender: "male",
  },
  {
    firstName: "donna",
    lastName: "ream",
    birthDate: "october 13, 1985",
    gender: "female",
  },
];

const forOfFunction = () => {
 
    for (let person of arrayOfPersons) {       
     let birthYear = person.birthDate.split(" ")[2]   
     if (birthYear % 2 == 1)  {
        console.log(birthYear)
     }                            
    }
  };
  forOfFunction()


arrayOfPersons.map((person, i, array)=>{
    console.log(person, i, array)
}) 
 


  let malesArray = arrayOfPersons.filter((person)=>{

    return person.gender === "male"
})
console.log("List of Males:",malesArray)


const functionForBirthYear = () => {
    for (let person of arrayOfPersons) {
        let birthYear = person.birthDate.split(" ")[2] 
        if (birthYear <= 1990) {
            console.log(birthYear, "true")
        }
    }
}
functionForBirthYear();


let arrayOfPeople = arrayOfPersons.filter((person)=>{
    let birthYear = person.birthDate.split(" ")[2] 
    return birthYear <= 1990   
})
console.log("List of people born before jan 1, 1990:", arrayOfPeople)