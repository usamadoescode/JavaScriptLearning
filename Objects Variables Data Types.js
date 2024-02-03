
//Objects in Javascript
//Objects are done under block of code they are combinations of different values of particular object
//here i have a object student which has such properties name,age,city,semester pass or fail
//We can create object for anything like there are family members in our house we can create objects for all with their hobbies,age,height,gender,income,profession


const student ={
fullname : "Usama Ahmed",
age: 24,
city: "Hyderabad",
ispass: true,
cgpa: 3.24,
};

student["fullname"] = "Asad Ahmed"; //By doing this you can update objects data , remember you can also update const in object but you can only change its Key
student["age"] = student["age"]+5; //Update number values of a objects

console.log(student); //This will generate whole object elements data

console.log("My full name is",student["fullname"]); //This will generate only full name from object block


//In javascript we use Let keyword to declare variables and values

//Print more then 1 variables values together

let a = 50;
let b = 100;

console.log("Value of A is:",a, "Value of B is", b); //This is how you can print multiple values of variables

//Add Variables values
let c = 500;
let d = 120;
console.log("The Sum values is " , c+d);


//DataTypes : Int , Float , Boolean , Bigint,Symbol are primitive data types 
//Int stores integers, float stores decimal values while Bool stores true or false
//Check DataType of any variable

console.log(typeof(c));

let name = "Asad";
console.log(typeof(name));


/*create a object for a instagram profile */

const profile= {

    username : "@iusama",
    isfollower: false,
    followers: 556,
    following: 443,
    bio: "Embracing new beginnings",
    city: "Hyderabad",

};
console.log(profile);
