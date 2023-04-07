// const temp = ['H','H','H','T','T','H','H','H']

// output -
// H T H
// H T H
// H   H

// 1. We have an H ->  we print it
// 2. we have a T -> We print on a new column 1st row

// 1.
// [H , T ]
// output : [h] , [t]


//4.
// [T , H]
// output :[ [T] , [h]]

// same -> dont do anything 
// when the symbols are changed -> make a new column and insert in that 



// 2.
// [T, T]
// output : [T, T]

//3.
// [H , H]
// output : [H, H]

const temp = [ 'H',  'T', 'T', 'H', 'H', ]
let varib = ""; 
// output = [[h , h , h], push another array [t] <-- array_ref]

let array_ref = []; 
let output = []; 

for (let index = 0; index < temp.length; index++) {
    const element = temp[index];
    if (element != varib) {
        let temp = [] 
        array_ref = temp; // refresh array_ref 
        output.push(array_ref); 
    }
    varib = element // updates varib
    array_ref.push(element);  // update array_ref
    output.pop(); 
    output.push(array_ref); 
}

console.log(output); 




const obj1 = {
    Name: {
        firstName: "John" , 
        lastName : "Doe"
} }; 

const Obj4 = obj1; 
const Obj5 = {
    ...obj1
} // creating a new object with same values 

Obj5.Name.lastName = "Rando"; 



console.log(obj1 === obj3); 



const compare_Fn = (objet_1, objet_2) => {
    if (typeof objet_1 != typeof objet_2) {
        return false;
    }
    const keys_of_obj1 = Object.keys(objet_1);
    const array_of_thruths = keys_of_obj1.map((key) => {

        return objet_1[ key ] === objet_2[ key ]; 
    });
    return array_of_thruths;
}; 

console.log(compare_Fn(obj1, obj3)); 


//make me a sandwich
//make me a sandwich

const sandwich = (bread, meat, cheese, veggies) => {
    console.log(`Here is your ${bread} sandwich with ${meat}, ${cheese}, and ${veggies}.`);
}





